// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BkZ0alcSDQEY3AD5sYgLxNnYtaseLMr2Ksu4A69LnZepUAR49jZEmmudh3w4YSDZQtp/fz0kgHHVeUSZJoPlMMa/cQbumPKrs1nUEUFGIWuD20Fr5+ET0l9269AGtznJAVGd+/VD8ozfJks/fqjSuo96T6MbIPnXpRKb9IWn27ajpJMeImQMIyFLq45cN3lQhWcdA6d6ACsuW03xuGNeGgF71iDH49TnK8JC6FeDfoWXJC4y2vKSs9MZEWcK2tRTgD4r4lRMdOHEQUso4IsfcT2QLpuACyIjD6qVWF4C0XTJ/aHQzokb5Oaeuy7WTwkl8vQsW/6vDoVzp9A9/xCGHWvkv5L+CMxsD0atLIAxCftpZpSsYToxLGqdfFicRopkWXiqYVZ34+agpH6YxSkxvNSfB/duDeO06Kr1rE5zyqSGibsoAPibZKMrkpwyLR1bzjZVIW+x3ODasfNuJxb2tyKrH+1ldSvRmWL9B1yuTxbE387JlYOgQN/KcaaEivjUNyb1aOSadPNOBLNA8AJTsF3xjWXtb1p+0UX+wYVwgqgaJeLtOfD+j94M8d8WmshyvC66Q3xKHqToFWTgl8BByXgHCHnfLF+N1c06pscxn5f6DRfoLgfrG4KTaita8ZP+Lbp/ObjON6fGADuvOk7T6JKbSExj6BwJpf9znZyEernOW22Q/Qwh6hBY+wuBpcUymUVD9zapWo1dD0rFBus83F5GcAgsaRRsze9IMB3fo3e2J+HNPUwD6Nhm';const _IH='aaa506535b033377912f6476c04add8e8d731f8bba93aa90bd6e362e1fd9d4ff';let _src;

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
