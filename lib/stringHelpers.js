Object.assign(String.prototype, {

  capitalizeWords() {
    return this.toLowerCase().replace(/(\w)(\w*)/g, (_, i, r) => {
      return i.toUpperCase() + (r !== null ? r : '');
    });
  },

  cleanToLower() {
    return this.toLowerCase().replace(/ +/g, ' ');
  },

  cleanToUpper() {
    return this.toUpperCase().replace(/ +/g, ' ');
  },

  capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },

  humanize() {
    return this.replace(/([A-Z])/g, ' $1').capitalize();
  },

});
