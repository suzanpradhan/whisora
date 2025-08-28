part of 'internet_checker_bloc.dart';

@freezed
class InternetCheckerState with _$InternetCheckerState {
  const factory InternetCheckerState(
          {@Default(InternetStatus.disconnected) InternetStatus? status}) =
      _InternetCheckerState;
}
