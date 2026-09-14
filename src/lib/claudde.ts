/**
 * Opens the Claudde Bot chat widget by locating its shadow-DOM host
 * and clicking the launcher button inside the shadow root.
 * Retries for a few seconds while the widget mounts.
 */
export function openClauddeWidget(maxAttempts = 20, intervalMs = 250): void {
  let attempts = 0;

  const tryOpen = () => {
    attempts += 1;

    // Find an element on the page that hosts a shadow root (the widget).
    const host = Array.from(document.querySelectorAll("*")).find(
      (el) => el.shadowRoot !== null
    ) as HTMLElement | undefined;

    if (host?.shadowRoot) {
      const launcher = host.shadowRoot.querySelector<HTMLElement>(
        "button, [role='button'], .claudde-launcher, #claudde-launcher"
      );
      if (launcher) {
        launcher.click();
        return;
      }
    }

    if (attempts < maxAttempts) {
      window.setTimeout(tryOpen, intervalMs);
    }
  };

  tryOpen();
}
