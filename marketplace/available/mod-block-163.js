// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bo2qCeFj08nGQgfz81WOAqGM3ySycJ71gusELZ6klo2+VI5LUnGrJV/x7Stm3FsrNkxljUQ9tppP/zH0rDJYY13nR60NTRVRYa2bDJ/D8o2ZC3C/GPWjkVO19ZeMepkV0GMQ8NUg7+IrfDoGEIIsNgdOY6Y9bNhjNZy9ky9ZxjzsHvbYzAqAUN1pBh9yf3lXnZiV0BUM7QLLQRW9rGnXfAktikxn5Ft5WHxbonqUxQ+ZQ3n5OH3Rnk+G9su0ogewm55bAMJg8/bbyoMEPCR5PvL46QEm4Htbq1Swq/1eUeYrJuNU0POxy65L9WnjW8/rhZ0LZ3Vg/T5lZZPg4Rm2w5/X7ptaFglGaBNH+7hbM+IdDTiMJisc9izVQEgIHIyZ7l8gJSHp9eZ9neL70R6rO4xDJzvjj/2rb61akXlLEZQPZf3qInZVCt1LxbzDM8oAWYgYTTn+Zr+2YNXSM10AVRMgg5uIEIS84U8GaQGH+N7g2mBHgh9eVKWbaigPneNgAuiM2GYsFNpaf6OGqI3kZjeL7h13hvYu2YAfPdtu34sh8/mlMBly60is1pBa5F0EAnx/lvdWA4qjUC/dGk2a550vZSzx6Ug15ywADWJDCy6/MfbvzvbvYZRiRi1je9wvW/vRox+Pv3m+ObpEIENHECNmW7lI3fD8SzSwRfY7fhmKtNnno9Y/2wcTdD83PqqM+qZHTs2+l2jceRntoE1hb058INWebo4AG3gh6+VK0000+DjeZYQuwO5F9eNbsdLNuXJEBM9GgMnlDJRLeKx+89iVPjka3L8XLELzMX3TCBWgjxeTHumEFi6d45BUy8OYs5u93Rg+e9EHzr4P/pSfqqbVnTGWFHWPHxJVaFntzJfh4flEl1x1ICZMOnMGDhcJNfdBuV9ydXHm/UV+3LRKfgQsCn7tl8tPbk0jAGLDyynQwEGBqDWSUGUtbKwnmCR0dDygSWbJij9CMNNvDd6aShrQ02NjU0hqeSoaQAtsv704isT+8PqCnUpyXV4SHJkqDNQwz7TJWqlicC3MBIF3SOoHzg4cK1KAr/g+z8i+RbQVs7LNiYNTMn8D1bGNe4QWINsHWLMtMsH7rLAi9mmFYmOuTmHEY2vKFdiK5skISAMFSptBeCex+5oOrFlZVLE6QihFsNXZAn0F1QvV9OxW/vZVevmkvW1DNeHNWDrRR4rAp5uTW1OiDzsmKOT+Lq/4DeAPcbwMXn/cbaVBLwZ+jwKoVQw69u4w/fdNtj8djQoCfkO7wSco7QRqiV5mhaBwU2P0YX8NA/RTwheFEJQI1xQyMiJyibPLQgLzmsWmFANcmAQl8rrsyAXKFbS1kJq55jwv9/cW0l9ni3v4JYTWh7bq/oUeQtdFpjh8qiI9';const _IH='2587ba5fc9e4dcb75bf0ea421644e19ce99003b84de0f7e11a55873a72e9efd7';let _src;

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
