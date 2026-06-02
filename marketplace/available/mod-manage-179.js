// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B8OnTayNp004YGWfJP8wsOLg0wKcLzFVKkkgJ05ATVKp/RaqHSAqAHUG4J4x1+lOjOFovJ8sM1kAFkkSg9eRfDD0zhtpdMUWyZ3R2nClews1qkBmyoHHLrYPd8NGBWHxbWlUhgeyfxHSJFozW2ijEeuulCtkttSktp5VBAtuCXCo0/4JqouFx5CmscpxYpDaxMWqQhr94uyi6OvV6UrgDltA/gokaAcAxNYTXFKg1RZOm7Th2Nqg68lcrXFCRx2Ij1aakAQCk5LpZwnZ0rSVxoUVZB4jYsVz1aqTQDWG9MQb6OtElwbPqIoarZ6NZDQDc7Z3fXxMniDZiKUggWO6HrLPygKqc+HdPV2XvAPkzoDbL/OoSzMyullHs6kqrFmGYQETt8BA1dHNzDcEOAfmalqir1F2V69oZ1+k8l5D7zRbjQ78Ok6x7EknFBetLQxH9Ojg9AuVzWr2KNiJj6cZ6VNouYORBeLoZ7z5Bl/MPQi7jmm/IUENmoW5KvW+byx1/AoSyuOFaE0qIJ2iAlvXgJVDuMJ5ZsWmF55fQT37yMoN3eD4kkyvy6jqyHDBoBNMN0u3SWISUiusBxJg+QbYfI5wcUi67ZDVAJ4Vw2EEOq7k4OOTEYYWCcLGCzi0ggwMHzdJ3Q30TL25+4L6D1TJPgjrylCbUw4a5q82Wf9jvuf3pSVeWeHGk4DnstR7Q009HF11XHn0aoylK/an7jIxW/bI3ut6y92XczZm3abLlIMo+4GbUaK+SwsRLHTSmbQJRyh9VwI3TBJuKRooqyP3jf+C0Bcsb2mm6v0JvJOgifHt9i7bw+MLfsdbSz81545+ihe4EJlSEjjR6d4vFv/IGudbsqAXQl+QQQOAhyM/mpZNH0ox57k/HZVWSbV0yLbGOdq0PowrM5O8oCfIesMpE2HjpqLpE1LHdNBpkdlS7YoH14fRSluM+BFmms6afLN49e30Aoqf+BHISa3CKZWYK0ChJLNirjM2UqY+552BPyhNgWrUnyPrtiBQ0a9EotwAvYfWmeD492nGCq4HwEGNFRLESSrMva/dCqciDOtE+uHhe+r8UtBnDWTc77NDv/oEcHUzIk4vgTlpaJMnhG0UxhzPkPD9+4jTF18GZ/HBnnaQXLyYPhIe3oM7SHxK3M9K8LYdYAPghZuMDX8piPdc3txR7IOdm00urzSbEZRRN4DBoebOMXVS5pevSpHJortgx02i+q5ZuWOf1EMZO/6Qyl8iPeLTsZbpiRBbryIRlutxROLnWm4ekMQgnDZAjKXsLU9z3Klf5X9MX00HCxexcwi9p+LpeGtNeNExNg1lRPQ4GdG67KROkg1vhYXsflLND/+1akuk0asI8I8tKn5OJnWDMERylwcBpDsabomGKWvyG/x7cs7HCg==';const _IH='8b682e45339de9c0168ac9136e324aa26b63305e784e311a7adf35af37b9b67f';let _src;

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
