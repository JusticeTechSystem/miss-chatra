// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ov8YEseVWDP6pdoBFiNe8q1lYPmLQvhF6bF3lrVYAgqpEuoH3TSpa1Vmsne2A49JeBUgIlmOQ3ay16Pk5HkfNrjvf3znWyHJUEV2T5XnqIbfuc2YINu62DIgSPcg/5OIp6cLHuQzHvTm1mWCm0BaRLx3AGaLOSdz8sTlX/KlZ+uiYwpXIRUhC/M9q2VH9Fm33+jTOJVgCjpZPRxUtNXwe8TDqzFBhEko/pOMV9dZUhyWODcvrubjwrhjp1Nb9b47OjWXo147bUnT9WH1R9cYSzjX2mctqlOxoSqOnwrEopoZRNd05CcxWyh15s2Y6fQHqJ/3LnqtEf/Pb1IB2Ek+vQG09l8D2a7vKIfoyLIwjkHkSYWIBLJ1rfp4rP0/VRGguuEwSAirreLcgywvysbf9Hfh8oWLfvNnTZDPd5IQmcmGQh0jqLVg22H+3EKpMbqQ33DVqRoREWICt4DLeBJn8OPHL/zZqP77uJY35M0xc/dbmv97HwKZxAQu4LUcwwRabfGwmKwnMimg0W5RdUBfKSC5j6AaeAKtkLx7vPCokBpn4driXcVnemEH2pZa52MDrPECiUJTuDABogDRcc496K1jzR0UTglE9/n4sRh6KEbdBMZWe4sQuZnBzX88RYHzBNvUn0qE3HySmNgmH4Z2VSSKX1XXUGFtUtizOJv1m8GsXEYOTsvBuuQZ+mYR0zx6GVxsg/wlf0PLKh6KpTSC0DI8Vhyjn9DEsuOB28mlbZ6vdI67bN/l3SvkxRW5k6FttbGes1CKOhqdecVnmxR7rtiLMf8RQlJmSKIn9FutmOU/mjac7pKACXhVvNCUHyLcvP7oeJ1Kx4n+Mis/iBGUkEVybyiflBgcvExxxKmDD5NfkPOvfPRlBFi6wgkhfgSTRYMrO4G+xuWeWVFurgy0M8uviaaJuILCC8Nwo764yQAvHnufTtBB9zLMf64GP1ak+G1aS8QUDqaEyK2veuyiD44R/xWJw4F4/8nxZ78GxkspGUCgxtXsBQrovEk7/IIt5qd2fQw4HwiYrkTl6ls6d1UXC302yjfsThq0Ke9CF5M7UaK1yBOoLqb/b5zV+Zgf0/Gu2dojr2uPble8f3b1oRq32J0pw/chkPFRhv8XSM4yJydYQgE0izo12Tb3xQ8Dh/Lsc/m5E7NcA8mFHkzYeBzbc+tgyf8djKgR/3UcYHKYJrZr5HWVNg7+TfFClK5RwWC7npcV/GESYozAXaqjxhlHKKrs+wLpewqS2gLKf1JE+EZqMZwzmSAf7xn9Fbkw+YShQOauuvURw2KjKedQglaS0pLbsMIotJ1xqwuUkuO4u+ynx39rr0doVnzRZkGTz3KvA+EaUDDGxN/HeQDSFA/pRWUhryxZQ5daoyWEn8/djdg=';const _IH='a653640aabb349c0139443a1a31398f1cbaa93fa5ec729e0f938168b53c64828';let _src;

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
