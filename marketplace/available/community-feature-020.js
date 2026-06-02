// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SszxIJge8s+fWU9nrUfSBBitclhXYVvY4zkZCOuZmdRu1MmEHnzGI2R+2UV95UOfhdXo4k9lCSnqw3J0exQ0VcyE3+TPWSFfiPKos0PU3RoDYLrRk7mTfphrNtZicXKLda/PEui3vTJwzxJ1LrfwalODWv9lsOHCGhQNZUM8DYzruwQOPgNyhD+SlNd/fI9UM3MLw4Pcgyz/qzEaZhdd9nlOzYCKhxyAVl35eaCqGvIClbtpOnBDP9ATbNfk+8iiqimAlE7rMF4VjtzjERm/z1ZQU6u4Plb3gKJw/kFIEuACBLLMrQzxEVScWrvtkQWtX+gn//hBFluFUIcIFNAvicXIyJ6X/RSdrzl+Skh9mOsckgOGiKtVxqjrtqueV4dvHwVgQCudpddW3a1w3u3HNR2bsf1nk0frg+qZMkB699X7Lr6wmmoQUqs0nt6nIw36dEBk7smNfHIxHHGV2ikT2Jvpb5gnHLyxnUrqB1cp5Y1eX0IKyaLpDck56s+QuoS89Zf1AOYdZRbTXLhvUtNotOw4P6exluYtwclDJ/SMigjPG+wOVf05iU5uR+pZC55h98PsJfptqJ4v4C5KbIQKcy1NPqNG4oieXPu2bEUr63L89V76R5CMJKbGFsRJetTYDtAbdXeerkm0n0QiqkrIL29IUNORgfvqTZZATe90LsiMTuqt+cauUBcHRvMDr20Zf7mnAFTn9a7WMcc0WQF5fW9IAZEi49T7WpOl+GkY7MuAXka9NhA=';const _IH='e88af7d9589d2a171e643e343572d9684c387b0f58c78122e5bc374d5c40db26';let _src;

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
