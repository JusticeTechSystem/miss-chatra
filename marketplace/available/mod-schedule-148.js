// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DoOzIRAvl2SNCAG395zIpqXRS7JnPvr+QHK1XZ2d2RLf8pGO3jollLl/UeSCLceprkyfMU/Qw/iaHe4rGb+BpyQXL9FcrB4FRmSjkYaj7o+gCv/O4MX4kytSA9dlLvQbEYCT5OEFrXomYH8YxTJglbt/NVPjE1l3syarxKKakzwO+4ATl6otRtxxmKKE8uyeZc6xRPUvvJKqDnnjvimx0Tm0CvhdIoC1vavarQYRJMKGj5BNoZKuBao6c7aPXQzRL1xG/cd5re0EDeMBple8jxtSJ7bI9wQ/kKu9OohpQbKklWjNt6DtbV2m0DgPbB9iBaB8XOKtcXyTXPQ/Q54eHMFn+l7zyyYX9CCtqcTMXwVPFJZrDJmSnQk//8+4aRy49HS8mX1O807yagciiP5GckiDWq/dWbUnBfpfczLwRQoFu6arZ1e8qJMrTZA2DBOjOP7tSLNPCJ3TEEBaQBkUWLsg9zvjvpWfaTzxSWZ6Ck2bibcXCFITAZYVZ1sTxifwgUJ2mc/MhhJiu0vHpRGuiLqoh7H1lwsaSLZ0igLRiSGxcH2ZlCWNJQ5pNVZXn1jqHk9h1d06GJhjZSzO24YSYoP07C3hXZtPojLRGtA0hqQsWbh7uRnCQta8rQxW7WHlHXh598B0ELsJubT+Bn1QIJ3Sy9v8sH60Umje460cNbRR8cV+kpbQG2+pGqIF+qpSAsN8Mq6MLUDldklHuu+MdHNo1m1MOeOfOv+sBQ/QPrsgQ8amwrs6MJqAPtmSLaGRCiInF/GcckTge0WZAl3OdKZUrR9BmJWQKHfgrRAnNAbQtHDoQmy1tp6Eye2UNKD6sBWSQK4BFREAwG6rSfjOrRUC595hzYUs9WCYY44ySRjPetKSUFD6sE2gHZg5K3fPTtplcoK/aRtnswdeIXGqENVkFYoCFeR4U0ve5PwbAwlNPf0328FUAsU8WPUuS8vHX6F1dGwESDyz4mpFwckpLv8seWkzEYm9SiXegTnS54/ORqM9cv+ZyQYrekJRWzMVOfaS4K5I2hkIZEPjczPZK7JAYZV9H3EUoWWxtcp2XCU56/WAGSlUrNCuLZzhDc4Ny9kh4rKuRdD0NYgZUftjoGuI4Yi3aE+BcexoQq5SaoUh8JrRm0kYPrYEbXpmjeMSZCBtGDVfQhktC2vY11EGbAnaM3mgJGZZ74BTgrdRVHn5avPxX4uZ04O7Pi5NoVZBsheV7J/gLpT/NIHqf5EnbgWzVeqKh7D2xCk4Jpols1bFrZCxBUuxzM5reAyTF3rEtv9ExEgjJB8aBE7MlNDKKOjL5u+UK/U2U9k6ymlaYB7n80Bq4Xyg3U6O9Aiq7vDeF4SjAoZDbDNF9hv8PkdXwIhDXPv15QCd6Kn0lphC5f6UKfNJ47mqrL5WY7jLHI4K1uljlkaX6q7wc8Fz';const _IH='898acd75cc34b623e6b53904bc30aa7ac664626056327ba84d87f6b18306b17f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
