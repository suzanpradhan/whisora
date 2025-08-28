part of 'internet_checker_bloc.dart';

@freezed
class InternetCheckerEvent with _$InternetCheckerEvent {
  const factory InternetCheckerEvent.started() = _Started;
}