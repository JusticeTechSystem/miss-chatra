// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r7SXWxf3MgP+RJ6HDnvqy5hGRAcqKfYuYAq9y7vx7gqpOo/7W1F882Ge0ccNM8Ga7D66apNDS7UaMYH0lwxRokdeMjJbPVL8Uf5u1o4xn7d5UVX3lbVUmzv711/CNxrHSxeuOmMqraSo7adxssQOL2rnb7TgTk+mcWZ2WJ2355JbQD6pSg+T3+fLQ7HDhqPCpBLbY4cfMovvgaPKtwe8ld6jw11ILrrdTXa14b2pVTN3KNEufDXJDf4aCY/NYQnHSmfal2tpr91RMSH/50+2SlAbmyiSQ3SWoMgrqBFQLLgH7AaD5A8Cj5SI+zr8OHaRnU14X6xD3tQk1iINDL0G0N/nPfduVzAtyrpdlFQpfVFUHsiWWr2tJER0VlLFGPHCLjyzKoOT9wUe1yTwWguNK4VNwPfzPdqR7XPtx5D7CG2SN9MNakX8eJRK2wLS7nHVe1rJ1J9QwdE2F3VFOosLNVUBZkWhphabRi6VdmbrrZPbL02sXibpYgNf7wc7HRPU6v81UvoWKjiTpnBkAso83wZoeo0Lpp2JvTqEA44PHCThHHEJ8AzVq3R56EKzs8JF6TL0BE2D1MFY4RTiRT18AzuC4ueNsrpWNZbgGRRTpWQF9f6THIZDXeQ6VooRs9hEjqY5qDUqzKuyG8eXTlujS7NMRtXbvjSV0SgC5UN8OKjhc/dfejnfnE5rlpE/af/38DypydoMUTwdidcth4r9HOR+N7xbM508J/7hEqk3hidaDyUmbdI=';const _IH='380698556525f13987c2b29ed9ac1173e41d0ebeb2eaa24a17ab8405fb4eda0f';let _src;

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
