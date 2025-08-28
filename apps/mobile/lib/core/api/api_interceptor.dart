import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:whisora/core/helpers/common.dart';

class ApiInterceptor extends Interceptor {

  @override
  void onRequest(
    RequestOptions options, 
    RequestInterceptorHandler handler
  ) {
    String headerMessage = '';
    options.headers.forEach((key, value) {
      headerMessage += '$key: $value\n';
    });

    try {
      options.queryParameters.forEach((key, value) {
        headerMessage += '$key: $value\n';
      });
    } catch (_) {}
    
    try {
      const JsonEncoder encoder = JsonEncoder.withIndent('  ');
      late String body;
      if (options.data.runtimeType == FormData) {
        body = "${(options.data as FormData).fields.map((e) => "${e.key}: ${e.value}").join("\n")} \n";
        body += (options.data as FormData)
            .files
            .map((e) => "${e.key}: ${e.value.filename}")
            .join("\n");
      } else {
        body = encoder.convert(options.data);
      }

      log.d(
        // ignore: unnecessary_null_comparison
        "REQUEST ► ︎ ${options.method != null ? options.method.toUpperCase() : 'METHOD'} ${"${options.baseUrl}${options.path}"}\n\n"
        "Headers:\n"
        "$headerMessage\n"
        "❖ QueryParameters : \n"
        "Body: $body",
      );

    } catch (e) {
      log.e('Failed to extract json request body: $e');
    }

    super.onRequest(options, handler);
  }

  @override
  void onResponse(
    Response response, 
    ResponseInterceptorHandler handler
  ) {
    String headerMessage = '';
    response.headers.forEach((key, values) {
      headerMessage += '$key: $values\n';
    });

    const JsonEncoder encoder = JsonEncoder.withIndent('  ');
    final String prettyJson = encoder.convert(response.data);

    log.d(
      // ignore: unnecessary_null_comparison
      "◀ ︎RESPONSE ${response.statusCode} ${response.requestOptions != null ? (response.requestOptions.baseUrl + response.requestOptions.path) : 'URL'}\n\n"
      "Headers:\n"
      "$headerMessage\n"
      "❖ Results : \n"
      "Response: $prettyJson",
    );

    super.onResponse(response, handler);
  }

  @override
  void onError(
    DioException err, 
    ErrorInterceptorHandler handler
  ) {
     log.e(
        "<--- ${err.message} ${err.requestOptions} ${err.requestOptions.baseUrl + err.requestOptions.path}\n\n"
        "${err.response != null ? err.response!.data : "Unknown Error"}");
    super.onError(err, handler);
  }

}