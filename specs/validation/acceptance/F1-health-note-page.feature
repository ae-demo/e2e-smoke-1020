Feature: F1 Health note page

  @story-F1.1
  Rule: The page is public and titled "VM health note"

    Scenario: Opening the page without signing in
      Given Vera the visitor has no account and is not signed in
      When Vera opens the page
      Then she sees the heading "VM health note"

    @negative
    Scenario: No sign-in is asked for
      Given Vera the visitor is not signed in
      When Vera opens the page
      Then no sign-in step stands between her and the page

  @story-F1.2
  Rule: The page shows today's date in a long readable form

    Scenario: The date is shown
      Given Vera the visitor opens the page on 20 October 2026
      When the page has loaded
      Then she sees the date "20 October 2026"

  @story-F1.3
  Rule: The page shows one fixed short message

    Scenario: The message is shown below the heading
      Given Vera the visitor opens the page
      When the page has loaded
      Then she sees the message "The VM is up and serving this page." below the heading
