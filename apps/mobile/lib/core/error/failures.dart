import 'package:equatable/equatable.dart';

abstract class Failure extends Equatable {
  const Failure();

  @override
  List<Object?> get props => [];
}

class UnauthorizedFailure extends Failure {}

class ServerFailure extends Failure {
  final String? message;

  const ServerFailure({required this.message});

  @override
  List<Object?> get props => [message];
}

class ValidationFailure extends Failure {
  final String? message;

  const ValidationFailure({required this.message});

  @override
  List<Object?> get props => [message];
}

class CacheFailure extends Failure {}

class StorageFailure extends Failure {
  final String? message;

  const StorageFailure({required this.message});

  @override
  List<Object?> get props => [message];
}

class NotFoundFailure extends Failure {}