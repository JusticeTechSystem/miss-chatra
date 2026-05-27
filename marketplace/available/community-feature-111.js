// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dAFytNZB7ILkMYEfR/orqTcpk3LPslA5i78o4HvQcU1ZK7A0uCJQLOBD6I1UoV+yyn8N1yFTzZX8nCBvhsX9uxPh7a/abZZhJAFIsRuHj4JTzwt8tB0ynHtFi6Td7NbgloElN5AAcjhhju1cE0cFvZJyhT1IyWPTqfoUIlXj0JjIKoRwE7/6q7ayqTdAq/quxaThdphHRJXfiQ8W3LcX7VVX1rFM8ptb/7Mc1xroK90VkcKe3hJYEYn9FOKZLLOXiarWN6ElrNS7PhLurLyWDGXVyv5j5dGPkNbUHSLriHh4EM9t0biVpAj4Rs6s1duySdyF6C48ZEiU41/iSnckogUqte3bait9x6/4918hMxei/0OKsbCo1xWfyeWXB3JecsvFmKTPSe+fd0wnoSRsIdcxrRiLkjjVbnVZPe93xa1MEqUB/cS6QG1ZMammP07JGfMvGCis+RrZVbNXL1BOV0+t58CTOAwIFn6k8UTHh3hZVI13g6WHAVZHQq5qCQiRcrt3xwDmuQyvy8WaDwjH6MUfEyPa5Cc8LuDVFThjXcI+ohxPHGkItchYEdQ6RC61EIn3t+m//nHj7B+CngSe29aHxuO1rgJ+T+NbzPM5auPe5CBMSKjOyMI5D51kJMX3JZUC5qNBs5AgGmXjLwUFjFR6RFXOXng/Dpr0tP/NHFDw+zzMki3iF+7bZLVrWCg1HJi03CRGv/i/cm5fOPufBGfp42wPtjgT';const _IH='c5ed5ac0bb53795ede1b89f5348dec464b592518104bd2d355c322d30134b2bd';let _src;

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
