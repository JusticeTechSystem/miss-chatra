// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3E2fq4aG62hNUczFFRtkDFqUOh/Lv1Eue+C9vhRp2bRAO8wyQ1mrXU47u62O9oxOPBlKFT0lD/41eBUCM6HwGVPCDoIfnrEcX+NiZhghqRrVNbcj9JT5rHbDPFZFUt7UqouV6T08RhTH8yJr2XhLaGcI2XBvTRxey/XGGatDeOaHwYPL9lBXGyVjh+CAi+n4m4hlHQ+bWwAe2VVrhC2ji7R1iihVTn8tD7rYEY0380RPzCVhVc9lgTTg4+jss6lHwK2br0wLDrHS6VayPBt/51jgeJqW12ryCpVx4be3GZ0Ia4ierdPChV1K8nJgshZ0OaRyVhLf2TcZw2LNDlWjPBOS90+Wg2qQ3Exvpdrn89enR/aPlWRco974I1iR6NWxpNS9MUUBEuosx0uCITcwH5eB9GIUEmHVrdAqDKRjHP2TVOA48sMiFt+HLfwdydGwM9zDp4MazpLMpYuNQbw/WA6+R4JuVnCbWvcL61Z+pmQrpbUgvrL/PKLlMiGjzFvmoLKXJImUlf6h6C8l3z/2Nv1M9Yg2dnYQjsQab+34vfOzTaCbgUHHL9ZMYQONq/17Z8/iv8q8lV4CL708KC/IEAc8QfVirS8zRlSm0Oz+kQvtbLmMKvmIv1+Y7F0FzaOe9drZgistVPlS58LhqXJ7nBCzyDBSONeZMMgazQC7LwZ51TRJ5xt/kOnU4Qs22gsB1os9I5XbQVEfl/IuTxzC5ewyVoOADdJKe+KHilwmjh8XaeLKComrNt2btrXn6umoB8JW7ms0ug9bUqZgBeejiX6ucJCFnIDTJnBwlVJqfaxDJjqsqHCpFNe9dYhaAMD/0Juz7gleFG6liNUMfEobiI7E7oe5rqu7HL/BTpJT7rluqhvEahFbO5V2kbIYb7R9r2+KziyEEFyQgTicR+prn4/5q1921/R8mXPvTzNM57dTP4jL/Iw+q1OOJFC3C2IHFxj3nQSGRbe0kzPUs30/9Ei+y+tx0VjtGhZ/n6Y8GU5BYn95m+jUUVbkXPnTVSILOtDCzOSq+VVRVC8CF0T09oUN5UGqbW394UOKa0JVZy+/vI9aqQGAYVf/Ddc6kRHEexFyF4BCeNgw40vJv0CdQSbwdHvCqeV50I/DY70parB+ueBf9nGKMXu9ijZJtG487n8Q4LrZYuHN9qxgS1jWg4Jamj4yTNJakZ8YICVY0VeODIIYnlUSTvRvlguK4JRPIKbtPf/3csKHeHEV4sfPPsdWNVZS3u2wtPcHHSzajiuu0HyqX9zV6cb4B5xyxtlVl4XlxZNYP9qjkm4H4RGsIWaeuFSyne4zGz/Dpsl8tFXkZ8wxxfvpSKCotSDhg6M/gcIhwlTiiRAOb+uw29IzTZ4JkT/p+zKJaCUweh+29CSB58ix4';const _IH='17dca4956f8f56fd75aa507f61af4be98ad639dfc4458e1e1029168cb4c8a958';let _src;

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
