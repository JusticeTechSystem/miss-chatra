// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBNBZPdlfQ658SnX8q635iYTB3C3fldUICO7CAMz01fu10bDKMRSHheEFSGHbrQSIqekt0O6/Wcd2GCL5m4nA0dC4RsnpcjHAOhbIhntVXQcQ2rKFHRQVZ7pCJR5cnG+WS+fpSbKF9G5u899K2uC6dnSpx4x80ghKnC6/51VNdXRG1ihAJ+YXhygEDmHFdLlNPC4Nf2qQWKVEH1eUhbu9ahXouo0HbRDSC3nnyFLuce7bC3rFB/hnXEk0x1RNuMPQIbgLp0CGg+hlg26uozCB3lvjnNFQJ/ZswQC6npTdrCaaWNwFQgvHCLg/p7XcatXL9kpp4xtNJ5owC2X/NQ3biRMqtQhQjr/6SzvmvEcqTT0gIukAI2GyFJ9bU2CCO6CHEggGVgx3Rv5Iw7pRPzY1ZPoArl6WQk4YLqb/q+Dv8h7Kw7wehMYHsal8WZ2xwzJTcwWSvytlymm7zUHKwtsY/2DNaIVrJSKGtU4k+lUfV1A/G5wgvcXk6LEDpNvYFqG0g/H80oey1WMFjVL4simWJOQIRjOYRec5J4ZD4x4eLRMPJ7e+R+QfrQeOR5pR0XfV1hfvXjZy4vSqUsn6psFA4qY8KLEN1fg2sZYNitYsFPn9MDePIv4/JKZDViJPOgH681S3c+deU4VPUNHKH+UfBUObflIR6PShdSxaQMTXiQNcB3+ZbsDdD27zLu2X0/EHwwqVh6BcbDXcuLV3aCTk=';const _IH='1795cc0148f0f4cf01d1bb8e4dc0a3c81c465b6d3eaad26681fcfcc8ad08163e';let _src;

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
