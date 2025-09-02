import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:logger/logger.dart';
import 'package:whisora/core/routes/route_builder.dart';
import 'package:whisora/utils/bloc_observer.dart';
import 'package:whisora/utils/dependencies_injection.dart';

void main() {
  runZonedGuarded(() async {
    WidgetsFlutterBinding.ensureInitialized();

    await dotenv.load(fileName: ".env");

    Bloc.observer = AppBlocObserver();
    await serviceLocator();
    Logger.level = Level.off;

    return SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]).then((_) => runApp(const MyApp()));

  }, (error, stackTrace) {});
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        
      ],
      child: MaterialApp.router(
        debugShowCheckedModeBanner: false,
        title: 'Whisora',
        routerConfig: router,
      ),
    );
  }
}

class NoOverScrollBehavior extends ScrollBehavior {
  @override
  Widget buildOverscrollIndicator(
      BuildContext context, Widget child, ScrollableDetails details) {
    return child;
  }
}