import 'package:flutter_dotenv/flutter_dotenv.dart';

class EnvironmentService {
  static Future<void> init() async {
    await dotenv.load(fileName: ".env");
  }

  static String? getValue(String key) => dotenv.env[key];
}
