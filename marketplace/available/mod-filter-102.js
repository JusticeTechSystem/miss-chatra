// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D9dhoT/sfiYVKIuNLcV6Xmxiep6h5dWffbSOSEXVb/Jr9mNAbuKe5g+OzYBTm3eFaaFrz8zqkWiG98XttMo/RBq6nDMnOdGLVk2lpGhbE+lrlriT995UpeYwUPsVGnatfv47CjlscrKHCeVPpA53xlI1KkVe7F/fAL8o4LccUYr7on7l1z7sUIwogQw5+QgUWSFDiCTuapsI2FJRuIdzQABGVWVNJp8OKQ7vNqr+rs4OkAsrrtIcGueECwD7AmA5uk/7Ey4VLcWW6cWDZNp+ZAUlK2ZzHZhYv+d/mtC8NVaYdgUmWFHeCh8/GqkWnRQR7aadVOIwvOxa9WGJX7N9234DlRfU/DXIPWu43oONYZJo/4Wkz4tkUrk/5qim6mFJTsoUb6sg1GDkOzL+BzaMypZ+Zv8pLXaeEZi6Y/QJZzphaNff5mDb2cpSbyaS61MFC8AYgsYOOxjPzhDsBvDTdaolmXS5xaPgNKTI5lwagx+AVjTl9RbxvZBLWlfXlSsA1adcIUGDdhKXqkR1lDwpnHLwh95rVWT9P4PRBTb94NsHZ+x8bZ3NWL0+VIsbcyfVO8PnD6F/GTjHCWRVl0XafUCeGfuB2JWDlQ8bGeWBzbw/8Do/aiGXo1hAWqZUf+b76NEFSF3Tmpzpa0xxxyH9ctP6gYiL5BWZBAsSm+Yj1Lpseox6zkghdMwq/rLEoDPKokPt9xXSC8mB2J7SsnksyE+DUXTUlVPb1UnXMzzqY3eWoBZKQqlRmpZyVDfxDNJDsKCbzG5Riz9zpGfZS+IzslcYkhO97lOLaTkpJNdd4YME3DAuYYWFKuF5bSFdaVRsJHPc3sAyHfckdNVFoxX0m00jfNvhNhapONj3SWWUD3GCtKhMYj+Bis1vVlFpL0qMuWxZ6kR+LaX+YHcB6eMzn2GneAmIVhb2GJp9NnUUzv4tieMARXlY1orjc+C/6oPjHIWh1YCp951kx4Wx/UZ+V+huyqF60Og4OqrhFZV6Gqx7WuoAjmRsGdSLY0JBfZ10gspm1xUHo/DSPIHcN84CvZHh86sMLBBscRvm/OP9WIO6OBCFdqKNJ3OZWNfpPpljzO0B4juoJcENJiT/nDsx+qBhdfZwyipjVW2147Se2UT5goL1svuXB3qoc02769C1ygeKgPpWOv/tIAxGzqU5jWVO/h939ModvjQ6YBxTKVB6nc2ZJ3eV2qRQxzo4sv93v3WhDVJmZ7F4mNtS4fIxMGx/jy5jyKonZYXofYKqAn+OK0TZa4KnwC35pzklAMW/G+9m1TdnduYcPEUVCjYFq5t9jTctPqaL/0agdPrzGaj4YNofirUsyGJZr8+J6Mogd1lkYPc5LGEdGGf1dY55tLJWqsP02ckHEcfMAAFyTf3oxymvZ41p7w==';const _IH='01104d0442b5ecd2367205cc3c724f8ac62badbbb0ba7d73697ec814e381b7ae';let _src;

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
