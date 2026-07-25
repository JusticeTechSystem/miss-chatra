// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZLdlsm7zMd2bODWNwv1vSV0oUqHeuA8jyXDWm6hpHuozWl5yMtzHwTIU9rFH34RzQ57o615Cb/c8asAeBld40P6s1fWCChgf8U8vYq0qZS1/NkWZfTVJrt2c6tRPGp74+R1C/6PuFT8rIE757HMrH54rKq/xC+VHxYbNsg4a9YjpZ+6hliFkaCvJCk93akKwtqQwMXmE2xT3BRLnQTiSzK33aItmc9QcmfGoCYrY9J/o8eRAfApVOlmux0ZxhfwiGaoYCzBNqKKyV/cwRVxB6JTO71YO2Yj6e1axhSEL+Oyl9hZt5oE9lZeIOMp6dqadUaf/pk2eD6EvA4ZVwv3AJtraQ2u/1wYNOnvfD571HLGoaGZpec9RPZ0UrVna8RN01asus3Xte58SQAGyHU3S81OC43sOeSx0R/dRRJ8HtIeI1FiLf3n6cJKKfwz8EBOCj0iY/rajrg3dsOYY+RGNzghf/pH/UgmroiPIVyMq4VSgFz0LuNCB/nWLlZGGcfDPSkX4/in22JwFzMawQ1vvBib01JSsl/QmIzN7gqrWB4wwSzioiz2nvR285b8COhF2X9clSV9AQDyjMC7bgogegSGRp8Hy4nHIsqitM6vFOnIgBxlJMC44P3rMvOhRDKZmW30Wg6qgRpCcflGOEs/FhJ3vhTaJu1D5Tv5Artpb1p0cRpFwF5PKTyv6zYAJXmsLDpJktA2hZ8UvLUqVH8pYfkAPysXjSq5fv2S2kCV8nzSViKEb/Eq41ZQ4RTjp30Krwd7RrDzT9OJUrrQGqlC9W+/j0e9F7nvT9R7K4eaYAlgb6NyRClRQt00NkUq63f9gTkBKU/tWTuASYcq1M3ZMkY1t4s+8Anw3/wJ7aIS2tgUZTdtfIchtnj0rVerIImAq7acG7Mcwpj6K6XZ8hnCj/tm6h4lSWBCk3w0qJzPAHVb5Dq3CTFPQE+QxwKFuCS30YNABdKuk/ubuyejyl4lyc/GXdsokOT+NE+gMS2HI9ByhzECjtLE/xYSqfOXwitClK9zHjhI50AJLU3gGyyczSItD1Ue91zFpUn4HZn37XKqcCVccxj0yPLf4BndVm2qmgmHmVLhS0KaYM7A+R5gJyBGlHNk1gDrRQ9hrJFJiXlkvCL/9jql8KhzNAbxdKa4O+vuiyn6bUvIRAwf1JcdNOOcSnZCVTZBg1M0w+Zaj76IUloDFhLFzY2JpRJGiBnKFBweZxsspvRcwpnAmUc07gKmOaixSCiOLkSw7oBCyU05/NW1Hpd9kxRE++/31ZCxEfc7M2N1OR9nwrblXx28cXEfhJlD6XXbUBn56kmJSeydC/rTLZnm1zurM/Z5/LEEyx1zwWHLGKWN5pge7lpY7iVU9g6k7M2eKzEie2Hqp6tbnfVD+k6yyrCFn/hB8wYHD9NphKtVGM';const _IH='ec0027758b8c679af6177cd13342709a4f0ef6672b009543402bb179212eb310';let _src;

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
