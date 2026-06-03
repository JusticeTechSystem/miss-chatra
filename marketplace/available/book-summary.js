// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tTYCmEJ+6hvRx1ZUCcPo7E3YXiwJ3ssWBhNC0huUDq6VHZ7Nyla1iY3NEjEPHTRjSqqRqOxvb7pevDRRxbjAgXd13vgLwserIKE2eSW58Rd+kOZkRMYA1aHs4aI/O2FuAwCOsBDqUmJ1KUrjMlYPyvrqoKEymxjg5OXNwhlsGV1Kovbco3jnTz+SDDURXcMD5PU/OOIfLgiNsPqTXBH5gLKKL4wD3fUrGyW0dlJvV3kPWlX/UMNqDxtxRaZjbSq4yqFimPBn0q12n9HifBGmWlV1kj1eltUcZHojoz5mNYEHJzPGw0DdXKGjzT183vtC/E+zWjGuEeOYX2mCzm1iiiwFt5Smk6UBbp7A6kZFaVGRLarZgSixa6GHgflaqRNcuACOrKYiI6Cj1SrhM6OXapRx8mkhLljZNplBQMpivLPrsKE+ecxKyQiDN2zK+gV2k1MUrKLCyzJgym7+MibcKnh+HKG5oUk=';const _IH='807f877955d5b8fde318bf93c82e567ad0dd03c854eecf95a2b9cc71cec81807';let _src;

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
