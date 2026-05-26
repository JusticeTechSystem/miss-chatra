// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PCbRyMAFpgTFCzn1dy2pXxl3C8eNKvpmjFLkQFdRb6kcTpJ8gsc0wuj1Hdys1p8tW0ky7nKld0wu76RzL2m4FLI33RgzHhVrvIuvI9azNpTR0NrjKJ3Hm+dkXEbN/4hefI6wx1VQLrUxWh3PBxjI5uLvBqEqZui8UIJAJ79CHmvvpIxXp8q2LvAe3asm9t+WXdxb761DC5s0+f6n11XODB9N2IO77MigJL00LcsY9JtAdmAlKpGQxtYuAfgylD9zWCpu1ilcFyLjE4IPs5Fu6gGkAP1s4jcZ3V+oVChvya+EElNwcZkzoJTGVBrxVGf04Zi0tAWHB0PQxTk88XumEvg7iDkBd8oRbWiaCVM2aQVqmnrNw4huUl33dpCBKv03ghC5OPUkXNSUsjcc+6f+O5udvQrtAOnM42zhUaZBoDiZK3eBQVKQ0Y+IMUzwFeA3xtR5rF3zLept2xs1SRuAj328WwJSgVVXhCTNlaOaszA4jN02P03srjpdYnI4mFcvh/o/i/8F0r/M62J8dv3cgosQZHY0xp8FZaCbHgZS60tpg9CPIvNUdccLBMD2IKZsIQQNv0U0oP1H3U53EJpu8q33dZjEEZFJ6FDxIZ7KHxTRYwrpghvcF4y01NYMLG7/E/boc9tinw+1PRmMb50natoVVIobiPR/opnM4vklP4jphVcN1Bqpr8eojtMvuEBUIztJ6VeDmV28ElW/kWTkCOb6MDi8gTDUEuKsCVZ5QPsgRA9cJjWDc7y/pNc83WfkBSr4lPV0EMkL3U/3gJF4w+6m2Fs574fuasdZhG/jjzSXwz4Wy5XQgI6IF+Wq41Tv4FEXo1khiywmREarPdfCc2RGuy7qFsp0xE90vLe59ArgobXDo0E/5kOeLo/EZGO2kCrVgwGZyqfgrrwWH+mvtiJ6zzWdLcMtZcxitPPTzg42U3OPaQBRD6l9355hCV7VsocltgZOUAHyu66OkQSP72/Mkm4wHeHPKN5vzJRM2pDldXNwOs8PbOrkV7Ou';const _IH='29963bcf7edb8fec8d557a39746e00dcccf3119ffb5e7be1129729896eeb58d6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
