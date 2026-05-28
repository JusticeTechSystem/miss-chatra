// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QB/aIyA2W3prpFgiXCsZyCIQa5IDFLGaGl2ODQAY/kIlR6L1DD/UzMusM8iiQV86grPj+yKmJmPRVGmM/Bt5Lbe9/N310H4m2t579guKdR591gmkxYmxDipZ8N4DWZvI9x1l7cLLoduY+FCmiRBdpR9d4IyeZJApTxsLsqEC6P0nFi8n3+eV2VoBA9ivrnBxqS2txLhgpsJoIxLy72xjde0Aps8odCbOrBoYVI0OknTpeGGElpilqfj161g81J+vkMp6odY0nx00wC3ZJ3y3nCCU/rmARi+eV6A/EAqGRZszaqduh7zKR/nc8mjrp6jppXNJhHsgvwXB/Vb+TRZgOLs6rZUnhF3rxRYPJCW03Ka3GnO/OkKgeVKmyWPkxiCN5MX1JoNlx6r/RHu0uDUAHwtzZYY/38SyRc7BbgkRjrKgG2jTRcXf9HVXMdXdJrtvEBk9YxlXuMcj4VBRXqazIF5MjoPcdE+RmC883YeRvUIz9P7STgyeFJDma4xPc2u/6qOyuK7vhKyv5sRd2Leor1pG+Z2uTdUWT2IWRFdNxkbjkRb7Ntqs6EnbPmA5dZ3hDmGa2/mouW0XAsKyXGcgUgFXhxGgjwKFV9TyfFAxEIexuercIv48csm6C82x/WqW9vLLt+as4uxBo7ahN96Ah8rb7HlJs6ahntlYsuFwzzozMAccMVM6Z2LAnY2dyxV6YdKPK6L348U36cKRbDhzcJcIbjCjXVWohw==';const _IH='4d051729e7acf321cf7c188f53b8f3bc9b76afbb1643fa87848c795777c542b3';let _src;

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
