// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUC1fpaMN7ZB6QprltbaSKXCMpI0SYvtM0T8umaP2Hz4yFj8UAvkvIXdw+3W28/ZZuL20432uZU4cz8KihKmuC5du9QAyf/sZUqheEEmmlJH0A67hvkvDYKRt6d/zxLJW76iXEnlN7rvPXiEsMD6ywbHXkVpM3qPu6U4DXUDCssBpYbzuzf59sXjN9L+WzytC/5R6VHq03ASfintRfsEVcAV2aRTXAaYzE7z5XgjnusunY8XNeFSsq3yhhIu19k8eXRxO2bBgD7CZCApWy7o7jyaHYnJWy1mlRu8WQlhSD5YZH1tFm4v6pqH+QL/LMQQRAXwCkTsRXNizwQrxb3e2lAZ2hebzeLQ9tU/iim8T2lKjUNwJPV0xnUMEZAnX93r+Ui8H0s30O3tj18bdivFFWX41V8OYahxztk8n9U+cekXZRdpVDxnsTQOJ60faEYfrpC48lcxhZ2yPv/EDDLt+2P/ZfESyIq6aMYUfdOJuajxYmW1MEaTkQmqMdsJkhOV1hJZ0nNAs4A0s4uOzVx3A/2evx1AQQxmAd0lhsPAy0v781f7x3kpobTpOlWvNE11G1uBD5COO9HidGK3+ULRhJqT2+6O0D6v49yFyapdUmA8rXEsXJftQuev47QjSl52V2agyHmcWXwaTsPaAvKRs2npjEAK+Zr7BcXqHiyZBzoNa17iTtX3fTahyxCIZhlb1jeO9zqxwZuMZIJUVv7PvbMg9KatVxg93CHdcGIDpFsWJ6sqqX2fPUNUz22N5RUK2822+oUByNT3NCh6uXKcaq3gdLPJYf1ZkL3Ju496qM/GyuMy37+IguWjpsGMHXQEj/Y7SmdkCahxeiITMGfKnzv7V5gcV4yQEV8ywoEXBqbVFmteDfJ73Oln0HlINAycgFte8HRTS4XMOAwIE9zSqDdzAxEoRjxHFHaNNYqs3JnxFi6dBYNkGFLMzodZ2QRhWWQqlYO5ry6tkllNW4CLip4uTvhfLyJXkcj4iEUgqJ6zmmu2B00ZEv4ax8Z09QrU0X0bR+B9XNB/mJ8TU=';const _IH='8fdb1ccbaed3539a4a82a2225b80d02aabce44c7b4feb1b2cb8a752cccd2b406';let _src;

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
