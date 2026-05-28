// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sAKfd+ip7ipzxoUPUTGPaEaxJophv2B5mkPI1y7QYbOzGlpQ7yQRRi9b3Yj0vaq4bdP5nez1LzJjWdVDIEKBG5X5zLC7SWbgYxmYC9MqRXb8q4oEQCdeDz5/0lbj9PthiMxmiyUOtIrWFToxxD7+CUZbojQhKiaaivoQoVqz6S+XrPJXXWreMpdXP98fOa7hz7MqZpnNb/TeQe3fmgZrLbwElSwP9mUi55GnzriNIqi3quNz8UFfUVrYDSDyD/TNCQYtN13XzCjBbLueoSb7iRNibIsY19oX0PO5IMuzRi+Run632dyfex2NYnAn7ntbeSpMIP8w+cUn7lic0pvjmEyW2fW4Gv2tH5ApTie5JuuRP1vWAOp+EblzJgwNgFGIrslQtd+fd1MoiKtMUrykuWaXxqAlXJjvjXbntTAd16jSOgHI0Imd+JcUorEdC2augtNwcc36g3IUs5MmoPpeCzaRHMjLL5MGBzW7LeLBZYDzPX04caqRvCx+aVBWadoDYvwGXz2u0QXFHRthJDYauWNCjn7/85uZ2pn75U7wvCR3gYA+RTXd3CCxT6fo6QPVn5u7+K1AH86kMmH0SKkBFV4MVHEFg6CifJENs/JHcMOyzWDK8xyLir3pGpbUpElkf7rNuaG20kQHg70QbdmrTiHVb+CZvYYY4mtYDrI1xTa3oWy5/6AeBbk25qxmD9N8yTPYgsjVJ21cIC5l1+G/IPKMZwiGfPj/ib1jq7EUi3eWdgsB3FNK6iZapF/MdttKm3uQAjjeH1JCXUwpLw6Cfj9KyXuNb+k/jpDpdyNy0hMVvdSh4OM1ty7dm1KNTWT2E3Ose+2DpqUQwq1Yi8hY/0oCxZXG2JuG58e0Z3W9a0GM9nA/+RD+fBbLMr2nIHGI8k56SXyUc/uJk7WRzrKU06N7FFEQxN/5FlS22+RdfLlOs3Bbh6xBAsfAtrszvomQuG8+2Fpyf/L8nW9sl6g54pijWqv9QEEdqQcXRpzf7bGD4wTg/pKhbUM7MZqQTgtsP6dIRtn1TUywiH3gvg7C101RgfURRee778Ghx5xQZKYHzTR1K00/5PUca3GhCPtqXpx+MjQHL0igotUSO/JmdqCtBwpw3ZOwRqPGEpoidA4WxbJt7U11pj/Dl7707vG6wz2LaKY1C3P6vKEogI0ddmrr3RrTjO+TQ82MVFNvrPh7PlweXdYtBG8S3mpRfntEbPYs0Z88kvMlLaxYQCcYpQl+5wCz4ZuVJtv6TZc19DL56Cw1WYKkfN6Bo3YQNDKZNMmYR3WJ4GIaqH73q2Ncj1K1/RPlcydFZkH1sPp4tLo13AyihHO4VDwhiRsZaHYj8V/zpZoS13oICDM7MWhTXg/0HDPR89Xi6w==';const _IH='96052d250d77f35c8750fa1b79063229d56dbb77c9ba5c12727be48fc5ce6c00';let _src;

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
