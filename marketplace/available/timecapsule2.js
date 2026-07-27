// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZBk3/nPGIfRjuKEC69k0YCT5gLsC94TEc7ifHBgmaQQtsS7gYCxTK+afKpvFICJa2gsYd82CfmKA9HQmwLSr30BQDGx/4aB1fLyYCkcGFH16crIQIdAsLsColQd1jS+3bIdr+OexgyuwqzM09XfrhMMZsywYqJzNAHtDsHNUTVz9kJuNrOAKQdB7WEL2PMrJ6VICFriAUvrYWeOCmYOZ3mPWzdCKlYex45yncGZhBlgnFdrpF5jAs7O+eYGRvZO9YtV02S5goJ6oeIuIyf9H6s93JTPfX0r5RxLm6ahNEqHvAO/3pBMBJMCiHhRaN1hAvCw9takfg2ZjOpaqHm0VR8bhxKPjOI5qezDbo/MGlYJYyBpiL/D6AxQsVe6ub+N720N6O1KQ7K4/+MO8d1cjaFi/UHJomPSLDpG38Wuu/dByYcF8FGxOznOehdjGLSb4VaV+NClHbM4in4YyAiSUlY3Jf0rTlyn9Q+39i1IElUga13xarSdjGqvKk0UbuvmixmFPZgGONdONammmw7i8AEqAzExusGfAN5h5WdyrGHWMAkLpyBmeEaai6cOoS/LLIovTuhoLz952FndKEZDXZM8b72rHxTTHXcG9aOBld15uOrsiq+2E6PzO1J9g9Ps67msMoxlUSR1w9CVO+Ux7t6NgGLBVwlb+VzlbqAA/lSJIMJ91HrNqS1Sgacp7IJEGNhriokfoMt7ovBTrBartL5B9AO5kttSrlkpfNGLIFxnzZgk7A8WhSswowcy0mPvvbMN3hvKC/mJ3gt6u0x/TnWVdYL5fo1DaV7dSMkyh+fZaZBKfdVBHlAHzZzzrxlmfiYj8aLlhxHL5Jd9hRnBtHg+W9AiKVyaJlChZlcaUZRWo76xoH8p0xaPeO6BcE+nYT6f1O3D3QNyPXmNLMDpL98aq7PiWgiJU/pdltWW82qqZAR3UG9j4svq2PDwzmqePxzrUO6Hw3E+VnbgBj80Bkm4Pe+yvVe5MnpqYZV5+nV4QGQgdByOLIwRUi0up20GmSsyWnII+sX8ROwHf+8FnYUUCfDeQxnydSnEghyYkKDP2q5G/GdVdLyQBytwXsr5WFPoovO+Htg+ZrFxlhKYJOF3S92V8qGwUd6hlNqb2aJiECFvkZ+JQ6yzkRO8ClL61UwONsiInG22ezLzMOGsYs96kn+59wg9Q2aIuPpI5ZH+DtnWn0Vuxpa6aN6YPmcPoLh5LZM/ipfxE=';const _IH='04d08a2482c748261ce1e591b8a538865c83ffdd80a8183716dcab375717e137';let _src;

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
