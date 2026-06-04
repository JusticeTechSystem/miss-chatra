// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/4jdI7XFHEBGPRO27jfHZIczIqvVVzBYRAgeCj3beawIaSSNzen8u5aGXsIQurn5VC0YidQ+4vASNRSvPjzPuTyzJC2q+Qh758F3FC9k5okxotUC6pSRC7p6FJTXIfi+B20Yxh3BkDrp/mJ567PDelykc/tLYbWCoaywlA8Rh6fbFPhN1FenkSD9GLZu3Md6cZEIJOstVwxZboM6WfTLwRvcYfilTQSPaklHYWGSQCngrARbuYHMu0uXK/wgfDDj7ldSadgnm+2BaBL7VwWiEqv3kR03rTPPPaI6kPrJy+ntJVAmi6DsN6uWFvcPWfoDY06xlMX1S43IOu0wRZeTI0rcGnQ6XQ0BOSY7fremi3z7qhcjf1pf5p/c9yrcMWoH7fbAmhsK1sbFkF+CtbR75UCmHlsSqFszU/KcZDz4FM1LMpvSg0jYLxV6mVIFqBmVv+sLeKI8M7Jbc9yZGvoDdf4hBu33suqf415aDFrQFPINg0j6XSS9vdJHKbOmku1mgJ4AO33XSnJG2cP+Ea8ymVZh22EPr2jr2vbiy+KgD7iOBek4QaT/jyRRxC+bU045rq0HIo6DNde7NS4qWftTjGYtPuupcqxSBv1limVkoO3m/2J633UO0kVJjoW/0QMtqBaLoDe/e+z7AYypgQfJpg9uHLpBAhBP5ExlH6M1BDOsYXABboRz7jDlQJfZtTPGeiexQX3WMsIb/D0OqFKtHwpZ4jaY9U9NDkzcfR5LDR569JCYhejzEZep9LIvDrRKXwrHeQOvqIMeBj/XX948l9Q78YGsRNm8RdrPqTpb9+WhtyzNNVaeNqgOKebbqmlRVGji5bCVzbo9tBzJ6Yn3aVRanQ89pD4qgBD6Q2muixknZlLPQIS8gmzlZJSIzKIuFJR4O3Y4zP/gYfpy/0pNx6dIDv3g/di+GktFRaw7MPEQzu1lxUNStNC+AVNnSIFd388Ww1/WBUeECT/Q22Llai9BAdJW4VuTgBDzax1JVP7JezsOpwwFlFAk9Y6heehhGJsU5dkaPE+n5HPEGLN66J15leshh1iva84QVFGrwGcA7g==';const _IH='17041b946341d7b2a38374461332c16c10d20ba0e28641dcdef5d74239738c80';let _src;

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
