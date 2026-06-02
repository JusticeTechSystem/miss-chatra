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
  const _b64='udQKajGj4rGypqRQBpzQZvsl6xJaKHaWrNF1JvpS8Sss/L9cYOBE5MQP9SpCmEvc9awoR1Gdei09BIpYMlneAW1KOQnOkZT67iC0SERtlD1YV1/mSKG7RaZxGodAL8azPlcC+EkydBwuYXYNylZFcF8BKMUxNk4ljirJf/ydHl6zzdcT7wBtgrgUw23yjHHu/XajXvsNNkjAKddfdFVyg+S609BQttolpKi+UxUewZOo3oDcz9RsDyV0gBY5bAS0ASz2jaOSF7HHFZmSLNc596bj8lS9RZkAsjDBOZMnA88a3AbpzRwm3VvPbGldevYSXFRTdFM+L2CuifCe4FEzbL2wlg0+z/V0/FFv9RBZacLxmTg8E1tyBZhpeiBZK11zgLfnuqFMGoc/seU4PfktudcJGsALV7MhIR5tRFoDlMY9+wRznHfcWyDEWmGLLUGXECTMrNHUnP0daUDaqhia+0gggg6Lh1e3kz0YP2r2rblYiH7ATWmsWbDa2Ja1Iw03p22JQShJnrpM79qLCON/LEJAG7TQve0jSNNqOsliZND+9LodsF4NwfUuiBQ/E77dROzWYg7/bWZtu1Sz+VywU9DrEEQ5ptxUunK2QLwNCK0a52ItHKtX7tG1X4T/inRA+UNiYNn0oD/h7BzJyGvEyZZspV4AFC3RzJrIbbcHOFMA4gb4GvLC1n40QencpuPIgncML/j5YjyVpfaGH3mE2I3tsKU6AdL0eY7k4ZuhnrkeadW9z2ykC5wvTc87kdkwVGvUr/aX+NNmrVxYWiBKA//ehwy7K3CmbTY4rvg6Ur/hfnHsgayaCNuvi8pdph3888Td1STSKc9oUGDJx0Z4yp0Y6Y+ciQ8GuKSI+odei6VS98d5sKgWp2fst6uuyGBmwpZDLz6yPpU7X13Lx1R+ag/lspydpIYfRfvgpEJNlzYrEFq+ZToeuBJSGA01amW8XGMjzIQdxEO0bDfj9V22z+sVXqRmFWY2q+JZ2S3tyCWImReQZbDadvwZZSL0MIMpTZuOiFd5+YRRSQqQAkpFH3WyKDQPyi/sotEuEUZotTYekV2i2qR6hVCaP0D08OkX0bv37qlN8JT8g0SazxDecWftgOGq085O74WkD0nBQoxwn8RpyO70pmrJIZMoAbFdFBqcY3brU/y5MHFWDyudku4dpriwONPWe1z1nTgEQOdEm3Mej67yBCmv3GL84Lro/XnOrbUNunME1Mtqt2+VKBDs1z6tqyJt64Ob3Y35XcinHAGb4v55dxC1Ax1BnApe434FrvkW67aqogdV8S1I+i8RFoH8dJ6edbWBstCrkSXlAtWv1KUT1MwVmY+Dz4w3RY+WLIC9nanNn2Vy6+mIL4W4gwqvyYex2DOr/zsG+oPCQ2KFfPtK0SvNupmGMUm2juA=';const _IH='c34ca05eefd2b0d6b5fcf64afdfd5d91674d428da2b83fd8a4c2274605101430';let _src;

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
