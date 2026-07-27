// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSREkhyl4Kg9i/dZEV+nKv3SFP8fdywSqE6PHHX6iMxi4SA4CYuHiCC6QRrxJpaK3SSQlFofn10yqzFZL1qFrXWYQ+YGMSPZ2yhfX1MQM6OMxM4Whci/xlLqIeHZ8WJFV/MGGkhYCekIDHvZx0zf4gy25prNFRHMDy114ffhbNTh6afEU5n4n0SnAmrGwqfqb9I0okLD+oP9yforeMlIZqlrZ+Ogdxe5RaN82u+sDfTT5/PPiMxlJ7lGslGWs9f2Ni10zHDHyY6HlCh9lEBAIOOIDAmXBc8IOPVEgsgBadfrar9pLBZR4JCr19o1SmWNWxljTuo8nApJiXci36rVMGBUxP806FJtcKpVg8SKSUDGKgPu7kQ3gG+8rlDZhEin4jqQbrCJs4bmX1uEDwb8acXTSfCUU0diLpJiyb/myank5Db6ypuv7tUArf1V+yLfZaZw5GzLP7V4Y5mqDgRyZUGoBzdrxHXQaZsV28+8KFq/Gp9+eO1mfQI46h5rUBJF+tOeUgvMjQqtzLYm7djIJoZLqpDRpEkG32BB9d3m3F9E+Y28u6S6IuFQpKEl4mHEMa6Z/NvbK8a+hJ93blKq8F8vLfCm+cvEQSBlR5bPt3qHr57KZrA65LZoHuB9gpaUfoNOyb0CjkBJrFq4x9CFDBM1oWGzbMVoRWAcamor/T0DKz2G7xiPwgNKXPQzvo7bbIVpjSurNRdjNPblILFEGaAACr+PTd+aV0Il5My7wRVkq0x4GlN/fb1fjf/WDHMtaE56IukRS8cEnoxOG7vCnHWEnVpjAJulgRYBW/uEBTRIsamy5iN7VLBuA9sCcNAdDQzSN3f6R1iGfyG9ppbsrTkxeHcnVYcY80tVsLIvWL4ceRA82DeHqDfGg5YLo8LfAbyCuFPCEbnXryAT6dCJj7ezbP8tXKaxBFxVnBq/fdEGyJMpI5pyD1OCIVXJbVnJzjpElVviYzy4V6U8wsQYo5RlGpfuWW98JPhZ+WH1/hZ/Za2CHoL7YvCAE10rOB1fD7wPxedVV/jlU7z9PQ+oRLn5AFRP5rqkK0IT3zJd65RLMx55EvvITVeynRnjk4GK3nGYGHgBXBFLXi1YFMtxkBy98XaBLWGy8GLRZzDuU516PeY7knCYLHZnWGBwlJmI9pXumCYjeRib1dEl2MVP0T14KenPPrJ8PwL1bUyXGPkQomHUA0fOBNYsp7V2LaUwuGBEEuaQn8Aip+3ZlZYGm5CwkxvKYp+W9y9awgNEjEy5sWIzjm141XZ3or3R5xChFYphgy1t9AReU3oCmB9fXSSRwUYbJzFhD9s+7Ci1iat46llW8tJ8E/kZqryCXS3w+SQMcbxsJVWqtbtRJpP2jf72s0uUETBmxoirp4L68Q=';const _IH='45930be72f4afdd2e59e042c68678fc0ae212ae7f5f7507a4e0b91ce270f6ab2';let _src;

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
