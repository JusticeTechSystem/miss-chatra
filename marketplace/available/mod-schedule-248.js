// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1E97rmKM0ahRDaLBF+IB59jTbdnaNT04XlZ/0F5P2vpQMMIJsZsO2j9W2FrDuHKIQSQ6zyCUY3w9+fzQHoGOd7jRy2dgAzxHLOz4b7b90cz91uzDZgtLLHlbqrKd/gok72ZyNfRQkEKI6BdvlP3nE2QuSid/+Z8u/su+EH7j+t+Lslu4kBHAo3hYfsP7rnIdmscdzbkeWxWBFdmdIP3RqtWMGk6iQA+T53LdAZeLJvKzDOQ5TxnM8YTro+kI3qr9fwqimbRWmM8j9mYZcwe2bKzwVSwF1jm9GcpEH+9Yb/UE92XMS82tg8XcMXYCs/y8MtsR56Hvu2z0YZ1cuTZYmNSWeWS0aYKtO7RpRSzGw8GOJvZqhYBZwKxW3GPkSC0a3NVcVcU06M4F6KKzUZZT1GdCV0eO0h66DqJPqMIpW84G4Us/owuMDA2tHq3caJH08JFIUPGUo0ANF7cMneDsS5TDCRhJExziahNjAm4V0sdlbSdZErHBcsLw9Eso06RcsLPB1BUBtZxusHWRQ6/4950ceCL/W3BOyR69EOP7f35IeWL20QK7IqV8G/A6yijVLhIFQvj/ICEB2eWK3VgwoPXFdl1OWjf5xdVvs6WjWYqRO39MLeDyRnQrcqaa24a+XhbzXyXdUsiEMstfe0CtdhjZYeHjR1qFy/LgDLfpn9OoSOCqmExWZ+EEJSnlKyTbtKR9wa5PuEo0BUsYRvssYiXo9QnW+ceKAbPmKX8rclRNn+ohcDOVX3f1ZdA5BfFJY7nduZugZciMrzYcauWbU/C049a8wRwPWxJoHpEGbtWC6WHxQ7iZZSal57dKD6ZcdYekkDS9c7bsNGz5N51Okcfg6IqXW664rXUF+Wxn5NiEguFnI7aaolVivv0BQwnjTkAaZOzKMHreEAe4gZemsRsbhfaCsdNngQS1br5P94aczAlWPrCyOgxRdbqTqGRn60m0eHtTI4/nP9E6pWZLCz6q3lZZymUZBOiKpc0D+i4C3KBtz4kO/4tcGtiZpebLpVwLzJnZkXlYSr/aviTuKtR4ALFXflAbyi1bvD3ahxcfQJIRGFED/H3IUkJZQV8GZwX6HhYCjU321ej3Cdv23kVsUhdkT3yVMKOzCMyit3FS6ZsOLPiB9tbLIYhiWYQ5UL5pryalVvThrkNtxfv6ow89yDZQ6dip7r8/b048GB5lR7CDggVzJvtVyZl/ReC6ICYqesSDk/RUlrYVkjnvdyj0tVynjy81R3rz7yGqgnCUohxYd0VZDCSoMihzkVr0sUKYXJvVoZeBGXVFq1GAK+sMh8KcsaCavoS+80t1QWBd2I7O+4CyC4rL5NNMVmpM00uGYB9dd+4GlXp9JaF8Sz6gvXIl07dqdpFoervF+el3/tTD1eeWIHthTT3YqcOqm7telsTTwrj3IJWn';const _IH='1de385ab08f51b9050e94304b2b846f4c917fa60ca949acb02736d5588f21bb8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
