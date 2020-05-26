import formatAddress from "../formatAddress";

describe("formatAddress", () => {
  it("returns the formatted address", () => {
    const addressObject = {
      street1: "123 Main Street",
      street2: "Apartment 456",
      city: "Atlanta",
      state: "GA",
      zip: "30307"
    };

    const result = formatAddress(addressObject);
    const expected = "123 Main Street\nApartment 456\nAtlanta, GA 30307";

    expect(result).toEqual(expected);
  });

  it("returns the address when there is no street2", () => {
    const addressObject = {
      street1: "455 Av Rivadavia",
      street2: "",
      city: "Tandil",
      state: "BsAs",
      zip: "7000"
    };

    const result = formatAddress(addressObject);
    const expected = "455 Av Rivadavia\nTandil, BsAs 7000";

    expect(result).toEqual(expected);
  });

  it("should return the address when there's no street1 or street2", () => {
    const addressObject = {
      city: "Tandil",
      state: "BsAs",
      zip: "7000"
    };

    const result = formatAddress(addressObject);
    const expected = "Tandil, BsAs 7000";

    expect(result).toEqual(expected);
  });
});
