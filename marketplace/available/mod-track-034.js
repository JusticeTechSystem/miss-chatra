// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xrN22ep2kWF7ojUP8tNN9Smk7/prbPg2Rb4MN6omAsn2HIcu6dqzHE6ix96ZxH6Mgxuko9aamw7JwFq2w9eor8ZL4ULbrCKQT9RCPEKJD1MNU31d5G4GEn5uWYSzqpWgxiVkCi3zOb7eEc22FWqrG1xzS0mb0Uvlq32b1aZQsOkTnBAu+x0cFPFdt/Hit139r0oOu4U3GKtBbpBntJEaWijjJVGHDGIj4DoRzVbQ8WgpZOWOhxpZnV3+2y6ObnaSuQnnXTSDqSbdMY/NDBBtS2X2U33f4Wsz/AA9fpqaf78yDvC9EINe13XTWZkydN/yVNtx47DUVb7WyAi5hiNDym7z7BtE2DBAGLAZP19YVQAzb9S32txl23j+SYVmuVwTKR9m3lskXHHPsZrwBaiEKJLIw8bFB87V4CGuekQbFYgMs05b/Rw8OGqDTbDUq9r9Tczsnh6hSz7BpyzaJYV4LpRgu+Ha2aKP/TRGmRGvq9Xwp+QO+GVPiU2QzRTITfmwFRquRgMFxq/f+QZknKo/JmbQj+E+u+nlW1XyRUw1faZiH+4t7/0E3tNulI4Ti/1+m1jgFOrvmZBYlw9iPyNpHiI9NPP0yTWqh7Wnl/SSQH21Qetj1vNTxGyzhmAclrLq1JQmV8IAPoy9atDMtg/sJY8j0hreFeHwY4oRNEa9ans7drkPfbXQ7uWFhuCsnHvzRNdXRa4omrsO1e3Kqwqk/JGoLKeNaFAar1SEYQT2qehNxytSlY8qIeyUgyJYsBT6Rt9aOAxyV4v/LLIt4+T8/r65CthF4GHJteVteqg570Ogb+F7fCbCpuWSAkZ7xCz05SavjaGSXAZW8g5+e0UkIMVZCg65+w5hSizKGsClMRkTBeWiT5rcJd3vYCfgA0iLLnhIODtmLaOu9aFS2eaQ8WRYNPn6CFAMtMghKIn4AMim4PsOopBNxNttYvv2oX3aftxcNv/zlYs+xNfmymC3XATG0VmfYjf1OKvccLcBe7qoXmnynIWnLavpDxxmXcVZNxC1LwFlmUD1mRpJVn0QVJpkslqxIzWCI4/p2CQEpYgpQppwlW8NlBNpJYmXJuMJH4UvuD+z8DSN/1k3F53XxCZVBBXG5w79D3XPg2BcKuTiFqMcCYXsPFIyg/+LDMjlRzZfg+UwmtUZ2ObwfGXOfzKOxtYutzQiaKy8r+BqlmMPmn+z6pLXBHibWYhNux4oyP4EkFQptsT557HcwUsdeHj7Pth+h8wlXT6MUDlX5GmodZfZ9ylOr/rJbnHgB55EaHMIRKFIqigNdPFEHTAPv6E30i5Fsp/lvVIMwzQFvq9oqv2w//aGfezO7vhuqu3pb9CLdGWS2uK5hWcdHVvrkSjaCqMCFHEjOA==';const _IH='94c893230de503c77e7cf49198bbcc90936bcfe8af13f7f74354d5227e128a66';let _src;

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
