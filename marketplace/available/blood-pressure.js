// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHVKfWZb+HsxoRdtGAmQ/7s3nFJM1JarQX1v436oUDaSUjpSEYmnq5G+P6Bl8gZO865ZMvJ3o25tJ9EiYFBrsj/LVP/8fAy1484tpXgaJQsPxBFYq+j7bS8xNrvYvTW+O1cxImd01pOghfWraTGBSwsL4EbzuWGejhPb21M91HJnPmvjfEvBVXnPvwjCyBf7GpT0OrMND4hL1GpeEttYxCBExImGWCo6s/jTp19yY7E+UJWtO4w7fKvaQC+15899pdylcakLN7yF4SdaphgbHYneT97Pd6gCtBc3CVuEVIZSuR3CD3iLx9T3LjHRcvUBkFFUTGkuZvQwPH78iRwMwylhvnuH/23tbDbLmeVYGd5G1G2kOwE9tdrUZwUGLL6XmIo9VRpsKXFtreliToWpddiCAmSEGkGGyIfU3yrC5yK6sCiLWujrSAeigWrMLW3IMBRO0kMy/WobvQp3A2LRLLtlL0zbu7LQHN0DhFzjT/YqXVQcn5SIfZu4v6EKKDnY0H1/wookHZ4SuCUu9Blx14TCVdFlNMptsB9s7Gpdl+brF1lMP8qgoRZNnFJqhfvJV7MXaO9PQkurQpxZBR02OpoYWy7oRZJCdI/cJf7SvcmMLNU/AsKOTAVuw3VQngpb9LTKvH3Uvzv+HfMZ0r85pkU1ipmFhwNZXYJRQMtyHvzbBdV4ovqO3A4To/4JcPTuDiwSHFULFioj0Ea+JGhBdlAlONY27GvT6Kcj9XhlJo17LTXLzM5FbMsGVhFhz46SloYTmz5Ay9hzLuZOkW+D1lpOucMxAbaVnVYV2djv3Hsd4eZcQVswXYW1+MGwVnTZZDAqpP1SsB6hcn7BqJZFcbVeayYd4kYRvnxqcmMWwG/f2givhBaZTO2/Op3wANubCilGPWdTPTZnjsvcEbUcDYIO5MqoIZ9txs+YllfgzaaiGmeI9tZQW8GLwnTIxwM620Sv5elqTHIvuZVxzTQNpje7k9iTi6gRH58tt00ztCcDywx+/87orKcFnVv8u5yHKr3zhu9ErAYSXUPKpZtt73mSMEPbbwr6Sonu4yFzD4VJJoz3wdJqjgtkPRTTi8znCucHrj5ln2QygZ6qdiHYoXbxMeof+j9KcQ3KVog2oj4KflXbMc3zCxBDoO9SCffKMr9VEywmgCMNExKvwFFxbLRgW2bqpaAHd5QacCjZ1w5Qn+Xy9X75YfMGDx8VwfaF2RIBpQjsqwqEO9/6z0WwtBvY8mp8j2u679aShWbLinnD8qegZZedWxcEXYSIA0vaS4Y7PZDt1SrXxJzY16efRYdQQNCXxyc+Lqz6iaHoa+HZXF+sqkNINe4oikzGIsucX2a3+boybaOAvVC7PHaBXFBTF4opB7ncqeCHe8Xf0UnSP/tKLhs3Hca0ousdhBzReL7QMtmkY45HoXxuWV4yzH1VrR6FNMAwKDXhuz3ak4O5fBUr4ci1hyhCvlqgwEF39AKrUFIvlRQCLn06GK/vtrQQQ0yUnNaA1CaBe/VcvkKXg6n9hCFMwdAxCvVfMh9hlTRZMi8+tOziTYDMuNx69MWoRIJjVG3JOgWuM1Z50J87cwzWKR8s6jW5qnJPrh';const _IH='6e15d1a48ea75794af41fa73ae7b45df40b1d301c26cbcbe85666d44c1fdc804';let _src;

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
