function assertIsSimulator(driver) {
  if (!driver.isSimulator()) {
    throw new Error('Keychains can only be controlled on Simulator');
  }
}

export default {
  /**
   * Clears keychains on Simulator.
   *
   * @throws {Error} If current device is not a Simulator or there was an error
   * while clearing keychains.
   * @this {import('../driver').XCUITestDriver}
   */
  async mobileClearKeychains() {
    assertIsSimulator(this);

    await this.opts.device.clearKeychains();
  },
};