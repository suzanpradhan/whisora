extension StringValidation on String {
  bool containsOnlyNumbers() {
    return RegExp(r'^[0-9]+$').hasMatch(this);
  }

  String capitalize() {
    if (isEmpty) return this;
    return this[0].toUpperCase() + substring(1);
  }

  bool isValidEmail() {
    // Regular expression for validating email addresses
    final RegExp emailRegex = RegExp(
      r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
      caseSensitive: false,
      multiLine: false,
    );
    return emailRegex.hasMatch(this);
  }

  String truncateWithEllipsis(int wordLimit) {
    List<String> words = split(' ');

    if (words.length <= wordLimit) {
      return this; // No need to truncate
    }

    return '${words.sublist(0, wordLimit).join(' ')}...';
  }

  String convertToTitleCase() {
    // Replace underscores and hyphens with a space
    String result = replaceAll('_', ' ').replaceAll('-', ' ');

    // Insert a space before uppercase letters (camelCase handling)
    result = result.replaceAllMapped(RegExp(r'([a-z])([A-Z])'),
        (Match match) => '${match.group(1)} ${match.group(2)}');

    // Optionally, you can also convert to lowercase and then capitalize the first letter of each word
    result = result.split(' ').map((word) {
      return word[0] + word.substring(1).toLowerCase();
    }).join(' ');

    return result;
  }
}
