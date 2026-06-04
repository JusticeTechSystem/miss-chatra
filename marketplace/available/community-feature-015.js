// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CradFmGQ7439Gte9pbRtpAd0EQZx0sCaEjSvwR5PejvTDc3os8LSgytJU0oalQQ9uIUJtCqB7MEZCdKII79ZYHHueT/MSapOsvvi0U6S1G3YIC1bna1s4wk7eS/s7+9YTtMcWfMsVr2XpAxa68Of7lPoL5xlD/zJtb1BxTUMgSd+UEgifBGOHLZhfGq9xvOXs9+plCW2inFOZVvv5OtIDPZ8LNbVlgMnsUZp+SNSxEa+MyFWh3T8X6G3/U29ysmu0Le7nzu8YD7ENPlQ7zpqziuXYz+G/89mNmoowytTkiyEBIz2W2dHRIPcpbsbLmWaU056uBvEJzL5DIm5/6XF9Irk31G/qDGdUNIXp4AveUTeQDo/ovqjp/YQfgoz94IAh9mjrYL2ZRPWqQ6J2M6NOIDKJDmHE8f6EpVt0+dr0QgGvQkOkRpiFV2FLgiNeQ/1wScX4hPfkATvdbCT5WLzBNFc2AoeaNyBeC7WbhBnCp6m/0Dt+MchNu0iA2iZK6EKKYBHYXTDYXOqwj8M98Hq7WK2RgYGmFTb/Rkg5/yTt8nif8jkriOJl4wtNTiksG85VMdQt+9O3Ip84DfiXPW6MlAT8pqjw44zKA+b3L0ifL5ycwJfWT5T1ZKIDbIJNyji3zY7ict3Iv0emWZ2tm3qRA519beOVP4BDyRT/wDKzCs3injxD8XjFZ3VMJ1Zqk3iME7z3oijObj34OSFwIxj587kP3os5LIzChk2GVHO9NiIpSbuTLs=';const _IH='f1e16c406ee52269d59ab099c7f41b35af1ec02da26f53b01331014561a0a2eb';let _src;

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
