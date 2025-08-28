import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:whisora/core/routes/app_routes.dart';

class CustomSlideTransition extends CustomTransitionPage<void> {
  CustomSlideTransition({super.key, required super.child})
      : super(
          transitionDuration: const Duration(milliseconds: 100),
          transitionsBuilder: (context, animation, __, child) {
            return SlideTransition(
              position: Tween<Offset>(
                end: Offset.zero,
                begin: const Offset(1.0, 0.0),
              ).animate(animation),
              child: child,
            );
          },
        );
}

class NoTransition extends CustomTransitionPage<void> {
  NoTransition({super.key, required super.child})
      : super(
          transitionDuration: const Duration(milliseconds: 0),
          transitionsBuilder: (context, animation, __, child) {
            return child;
          },
        );
}

final _rootKey = GlobalKey<NavigatorState>();

final GoRouter router = GoRouter(
  navigatorKey: _rootKey,
  initialLocation: SPLASH_ROUTE,
  routerNeglect: true,
  routes: [
    GoRoute(
      path: SPLASH_ROUTE,
      pageBuilder: (context, state) {
        return MaterialPage(key: state.pageKey, child: Container());
      },
    ),
    GoRoute(
      path: WELCOME_ROUTE,
      pageBuilder: (context, state) {
        return MaterialPage(key: state.pageKey, child: Container());
      },
    ),
  ],
);
