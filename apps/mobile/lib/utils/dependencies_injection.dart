import 'package:get_it/get_it.dart';
import 'package:whisora/utils/secure_storage.dart';
import 'package:whisora/utils/services/dotenv_service.dart';

GetIt sl = GetIt.instance;

Future<void> serviceLocator() async {
  await _initDotEnv();
  await _initSecureStorage();
  _dataSources();
  _repositories();
  _useCases();
  _blocs();
}

Future<void> _initDotEnv() async {
  await EnvironmentService.init();
  sl.registerSingleton<EnvironmentService>(EnvironmentService());
}

Future<void> _initSecureStorage() async {
  await SecureStorageMixin.initSecureStorage();
  sl.registerSingleton<SecureStorageMixin>(SecureStorageMixin());
}

void _repositories() {}

void _dataSources() {}

void _useCases() {}

void _blocs() {}