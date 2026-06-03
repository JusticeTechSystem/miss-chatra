// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KvrQ8P9kuxdul23OVoft4IiPdmZy6g9/ZlhE+rWhoUDsh7e4G504O7Y4PgmZyXYiZsEGywGfk0gtXuiY4+daDJ1q95jWetvUu/ovlLOvkWPwqB1bNsBb5StuxELfwDA8xCrxkP3B4htUxdrwKqiSgI8pbhDsVH4nPn+We3/JJo6846tBNAE+LsO5XeR1rtrTmOaDk5nB/mRw+kN3bOimOdrv/KWneOTMi+KgxDS4HESL5mWJ+IqbwEiSqeKPSnwZlOhFN4ndD5I2XCK4B3egZ38AxjrjyGo+e3O9+yM5jZpWi78xpDaeguazt5eMLGgMdwWi7wCmOWBoH8wG1lrulPwAwbxQr1E7s2MEuLClVhFiOoh4UWk20jxj3x+jOfLeHh6AQIpKM6U15tAftUZbQOrRH4Wqocy9DpOohlgjTzE95lD6G6CqPfKjNosUJUqOEESeki4SY+9ubTHgEPhWtOoa9vgZkz6PnjH3jniS++4wc9ypLt5HRz2QNnBPsBefP4qXuf8bsiMBevQctLtN3TGHS6dsygycADeMqK/2/FRrA/K2iuv12T9ZBxb0DFQavDwp2Igk2bwKB+WyQ3Xux3HLJzw2y5OqDel6Jl6QR6qKle/QxhDMkBDaseeODLuaWoLaS263Gf40jbzh0JrH/iYARt6hGT/UAdTnoU38ePRyN8DZUQ9SzZyGB+x34rIo/UhK445zn3986OtimGMi1QUMaz32k8gxZAAk9+C6fjnoXPlvPtTnPAMQuBoLZIPq+8jktSjEjvaURhXv2kElXZLPAIn/afqOYjtnlMGA5XWZyyWK+8FGvArw38EyPYjtTNMLE7mx12fBgwBrBtOx+cRBd1PI4f2OYlHPzrOFEddnknSAHvTX0Xf6eoH0PKHMglhsvAko8IkucYraydqmAmc1WHXkCX20BPi7+2bej4G8JztJbzcxrqbNxOtaerOiiFLfe6IExW1XIl9v4+VQUZtE8bpqMqS9';const _IH='1f7aa24df116fb4e150c9dd56f12733faddc728c61b3b6656d0e6ddbee5a51b8';let _src;

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
