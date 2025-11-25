{
  "version": 1,
  "categories": {
    "architecture": {
      "description": "Architecture files match implemented behaviour.",
      "checks": [
        "rules_md_up_to_date",
        "all_flows_described",
        "no_unknown_screens"
      ]
    },
    "environment": {
      "description": "Env vars and deployment configuration.",
      "checks": [
        "all_required_env_present",
        "qa_strict_mode_supported"
      ]
    },
    "build": {
      "description": "Build and linting health.",
      "checks": [
        "typescript_no_errors",
        "eslint_clean",
        "next_build_succeeds"
      ]
    },
    "routes": {
      "description": "All key routes respond 200; no 404 handover.",
      "checks": [
        "core_routes_200",
        "no_404_on_launch"
      ]
    },
    "wiring": {
      "description": "UI components are wired and interactive.",
      "checks": [
        "preview_toggle_works",
        "admin_tabs_visible_when_expected",
        "no_dead_buttons"
      ]
    },
    "ui_ux": {
      "description": "Branding, aesthetics, responsiveness, feedback.",
      "checks": [
        "logo_correctly_placed",
        "spacing_consistent",
        "has_loading_indicators",
        "has_success_error_toasts"
      ]
    },
    "security": {
      "description": "Role gating, RLS, no sensitive leaks.",
      "checks": [
        "admin_routes_hidden_for_non_admin",
        "rls_policies_verified",
        "no_secrets_in_logs"
      ]
    },
    "data_integrity": {
      "description": "DB migrations and integrity.",
      "checks": [
        "migrations_applied",
        "schema_matches_expected"
      ]
    },
    "reporting": {
      "description": "Reports and exports.",
      "checks": [
        "reports_load_from_db",
        "xlsx_export_works"
      ]
    },
    "notifications": {
      "description": "Email and in-app notifications.",
      "checks": [
        "email_provider_configured_or_fallback",
        "notification_recipients_configurable"
      ]
    }
  }
}
