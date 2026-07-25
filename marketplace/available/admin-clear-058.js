// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNJzl86P+eytTlxnxEGRPC7REwoZeeCto9Ndk+qtyCwBpLj/XToNFORyabdIWlDfaymOsQdc94xWe1uFPWAXFgoSogIIml5UnI+mDu8SRsSnLF5cofjlutB3VizTr8RIiklbjPX/e3bWqx3dvhd/q0/To63DzIyajx/nEB7K65FQnh3WO0dUiVCxEs8IgxS8AYNw30E7f9M58X/hAxZR/FGKYJQSJp8KDJsEJwE8Cc4Mr751sXgW6hJ2jW4/tPIyySKuwdwo9KFoVI7uaucrsBDRLvxApWKPP2dAFG51GRatywH2dVSrvkwgf08FP9w0LXrXB8xGuk2aO7crtMXDmsPajwDfKLz91AIOtgdt/L7XtP7jYvidTr87oCqT7yEWkfvYgVoyBhDSUDfPETGdVegHknjMsHcLnWW8iied7l0b0QNJc+M2PD26Lqheb5lHE+f+KoCIKosQ6kwtoaxd/U9SmDLBBk7zqxkMllsj07s2xmo/BhyJGKp/rHcLjosE+p5fSs9tn2X1qoym+7kIv52g5X28Jipr5cTjP9Ug1VB9z08LJYzoGoNj09hrkliVeFmSkZEPunalKGPuFknoNM5KxdWcTIOH6gLtCopGwo1+umNm4qULVL/o2Ox57ECcV6O9NF38I8/C4mZrSx+dEZgsmqE0QMvgoK/BCvHvDuKhFUgWlvvGuaNSxn9HUGK5bLlz/lz398DPC7HhymS2d22kx/4y75t1yTnQQDjiI6buGGSyK7205RDBPX/KPF9atgYq49OJBAMrVR9QF8pVNqbjjv9HriyIZKim/FtpFnUZO7sIV71Ra0KjjtCM1+4BWV782utb+JmoW6HEVdkdZwWBo30cVBvls7aKkyhgatJE/+JIxbxleVAM2DotBzuuyyYyFzRGIYM3KFDqW1cLwwZTHTybOTCfmUL5wiOa3/FvaWszL6l05nBUjs8MPl0hKCCNQfynkukXwMBi+gslvmQ5UxvbSgiuTE0u5m/XPx93Id4qvMOw==';const _IH='940ac56749b935a14bcf5f08950d01aea2b666aa0a69dfe299ed8ed37ee9b126';let _src;

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
