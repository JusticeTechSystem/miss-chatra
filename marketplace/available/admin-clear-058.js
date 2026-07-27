// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjiMY6NI5Apk67HhBSFo0PNDrUAgF/iTt59BlTUZc+07F4C0PrB8LWduTpD055+OCFBNd3h4wja2sO0a3s/Sczpo5cqp934IkXrNG6Len0ITJ7wFfM8HCSEIp1MWbd/JrWrMCpsRi8DLj2JOHVESDBbO8EwB7kP7ngcbvn4ujSBPmaoGZ22HBGlB4uK+QUtpNYQNb5Z1WpemTsG9qwPEWMQ45e03wSbNRK94odFukg/8Qk8hHcjrFWsQH7a+vXdljs0lzfOfF5q3l/5H/fHdJikhKAokqMzW6DF3b61XqSyx4JoFCo12hBeQGhHDgLiMhXaYngnobicenUsHrW2SGLGgo0kXbkbeJ2qdngfVVIzwcaj3EDnZzK3Y3A4ox1sctLmWjQZM08+Mit+JIPLMgGHnTVS4+AQ9wJ8aTLekScIh2LBxLfbSEBwe3aApwWG1ky1KGtT8nrw24KI+wpIwLpeFJDlTcDdVPo236EimudApzADLu0KJ+WSj9c7AvXrt6yZUD7uvo4gXj7AbmxsIdpgxTzOxZHmtzyYyzadhenhU4AH9y/smzoIFmw9hfUR8DPqjd4Eo6rlFOCEp0Q1ISa97L/EDOMAN55/FK+1kVVnYU7OShG5HlcD0B9KSZIJXzMxB1xYtvHHT+N7LcjlVYLgvJCP9AbaT062WbsL7eMEswpNteFDKJGIi6EtC2W5caA+aX8b2GjHXHWhh4PKk1NycbfaWE123u5+Eu7A8wBN1VWcqECJ0GNv7dkONAGnr+f2lewpwssUgIidV9P9kcVahRm2gRwrmlHu7YjL5jzkZZI72PB7R7leZ22FVF5+WD8NkQz/g3MHO38Pa+Ub2Qc7d9Y90Cm4Mco55SAPMSZKTCDiSgxRHGdPzLqYry5aTc/KesuOqqK49SFij3gSuJFng0BFQRtcbF2o12I5tOFA1TjbWezcnbmZLpotBz5MsdS3VLQBZtIL5ZzCOhh9JXqgy2apTjZzuO2ptxXY7kj62sonuo2wQ==';const _IH='aed2e75986f8af7d593fdeaef2412b4a0950701b5d0578e7f4f0fbb676c2e59b';let _src;

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
