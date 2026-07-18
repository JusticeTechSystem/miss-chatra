// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFOzE1tDfSde45uZCqaAz2fA/0FjUITJQiLdTTg2HH7KcYCez/+Q+JYsmbdJvkLV/AFk6STrQWzKp4HzFjuTZyKjzMcUDeNneRdO5e+M1sQdtbz5hN0q/m5j1JPebIaBvgFBh24dKT2WLyTWJ2P/ewmuCK1qrPa6dXWneidIxCaCLNO9aIUw5FXHDkLXVJWtbXy9sN9dQKgAGP5Cmv+VdK6BQNNvCIn1I4e3lGRzdDfyxzgr/gYw/ndG0JpnVYDGM8i2HIQMLz05L5d1M0dtjyg1nBVcY21R5hzRpTm+K1SvMTYNLSk5NcjB6N9chF8IKEs/9Rfr2xC5Lgc277X2prOfoOkv9lqQifsXm5ADXaW+BUXtnZh000mPQoZgZrkBJLRRp5eegzZ+WCgTJlA5JauN/CDT8YWt7ZXLilP+OldTaFJb7WORshbUCzf0cXorhKBgcfsY22gPRh23iqHzDCTQzIB4Kgp2Mrw6pKYmfYmZn8XCu54MHDUbx/rdFZ4rJ8OrfZ8dDlWxkvFue1G+VzY/0KkPpaHYQFz0jVnipY8MNX4I7bTmMbstGnXJbMvfTmU10SPFOpFw6iHWU0u8MXRQtuEDOVHTCLUJry2NFgaS2K7I6PZi7OyGaNOicep4gjX9AGGRG7xOJfOrNWzaaY16TG691dJ5EvBe8oAJFRno3QKqkcdZxkyXcClqV9H95H7j7Q83A1uInLpKbL/IWaoMFrehVEno+YXmGRxibncDQXfw2Prn0ffflrM+78fh97XNuFWB9K+rzrvNpZak/2f/UXonFaEx9RWoDjOMpAMJlV6WgjBZvEWV76Fe315svNrLQ7sP+XUu4ORIkzEVCLKa2fBlBC2voXw8doYNfklgEEGzMUJO52Bn+FF6qVZVOPO+5KUeBJl6O5junaE8Proi1QyPVIVEcOGwl1LIzdFQFy1/4uIKs4DTObFdYTPJPR';const _IH='f4d81f072c4afb461e6d1303994e5fc7ca4e710dc8fb1dea6127656d35d27f2a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
