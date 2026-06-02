// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+/lrQbG60nwDaBJSRXtor4s9xsZGtbZ4B6zibms64llH3Kq+n5P9tzmS4ziyL/R4HtZdi0105ixJEy+JuMxYNONVn5v4Eklb+CjKwJ/bGDylhz+wpxwgnVvU5ACfKn03LBGHKxBF/J6KPpGVAWAyO0kq1MnpnOOzHxyd0a76REONQM+Ah1GcIybTkFcBWlHuBZSifi04m6GbcKQcgg5ZhEXk937C7+BE+Fd8P7PilhYYUS59/wEQZSgfj6L0b7KPGZKrF23sJsbvfr666s7aGyh+9LSUSpzpU6QDlZoEUnGKcSnVTNTpx1ZCir3qtfpyeyxavfaemgEbED7r3JrY7CllQ1BqPMGxtQQaF4PWVvdnXsWPpSjisqonzi2zIqJ0Wj8a5yOHvVKVed9MIE+fWYi99DnL8ALqwnwSvg4FgXrQfTMmOeoylxW73xbHa/XI4dk6hTEQTPYxUS83JyAVl9BncoolYoVx2Vl/OPmmP+BppQrT/bc/PlZmlKZRBbSISOTSf03/vUjfqOikQGjLUJK9WcotOnhOVeEM0pJm7NYYmwqVn4jUIoTVbCSIYrjkTzwX4H8EXCCwfG2BTCjuMh98piwqF2b97kMBNT9vUnJLMvVddvDDDm5TIsn970KsNXuA7033ize8nPSfve8Qs6zlV5Zvkc9ztK7WTaEb7UZrt6cIby5jz8KGQdiWGBtglhHDR4sIj9lgH+lWhup36OboksoAn7Us4wNDfVyEiDWlBeGfBOmUhdEOxLKo0ODVgs0PQnS9kB0/nt0/+F8yJQCc+VQfin9xSQVoua5t9WcCzbs085rbltjNb1xZE9869rYYcCTS5ogA+e7MLUAs/0/UiSXbeZCNfIQoHhCUIAB0uEMBQDGEeCPyQmGvyXtSAof4HQdDXxpQ+m+CGsVQjkAT9zDMHIqh9GOobLFO3BzDR6C7sZyO5WZbnduqL8NVHgJqv9NwLiCDibxTMwrarMux7s6NxN49E0YO21cKmzijkiWGC4R7zdx5bj4KPS/zf1CmFvUb9Xm0Gef9j0qTtSatGjuHGpAB3WGClkmw6J0tBu10xxqSPz2qw9EG4XZ2WgsdXPfpgHn8vlLm+HwmylDOMp8lyATONgaW45+HplrcLmRLKSd3BHluSVilC/Kk4ro0WB3RJZ4M5cQjnIBHfcHCNe96YE4ruoXTReV2hhx8WUHP0hiBZCRab3Ee0x2zdkSJnphHIOJXpsOyu1QmM2h7QKloQ8YsVAlWxDlUnW3fgo9qzMzPoDD3knkNP8qMfh05mUB7h0nL+9JAdhKlWJTDmSppNqXofpkPrvdhXkaXyYFaz/g9JbMMgoV2iRRfT5EGS7U7JcePF+aSFDUWSdirbm90wVWH2Go2bk3PrgbRvMo=';const _IH='b43373b55719a2dfeea2e98c0dd457673957a6bb21569470b7c07476e3126fb9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
