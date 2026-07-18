// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzKYwoVVHEANXg4YI7g5pFTC9UVpmJmrA/g6PTtytt5E6OVjmftkSZBTOOdqnyrAMYkp2ljwD8jWMyiFIuNUEd8XdAMzwL9Lzq6Z2d9DrwRS+lpcpnYDkgqm8X7cq04i1rJw+piPvoLi1hqhXFnB8OC88yt6gakECu+Wgfo+UDWNNNOvlclPvZWoP/O79/38RKURtU5xoXuWrYpljRKRCmg5L+2mcIG//XiWP+0I+/VnYasL8dYaLXxr9U1taSAMZ44VoT9Nof4dhZimEQtyRvv5veVV8FCQqOOuygmNE1nZavcftZjdwDC1iKnTQYHa3qHbTkVrtOft/uNBPP/r9BazVVFEIDmLYZTpjU+qWhj8+ZwdcC5vjNfLbyOyZp4qIFR2PsIBJ1BwgfnqBOQ80lIr/aZt3cdETRnaIoih1VCQA0Gi6hKhjV4WX//iALuU1jfnA1guiZCfRJTtX0AIx/evc+ENZR8zJT0Jqlp13XpQg6UhQugbbB4fTxb6BEXrbmGqfq3X4fKnWzegEsmE+ShyiLidskTbqNYZaoPujwed/mv3LLubDnXSoPikcnplA4g40B2Cmua5u9a8Wg2uCOCZQ+X6a8dteZwi6XdoQYuEalu8ExWPGnwxobWMZGAUc2k2UYVxUaGyi1EQRKj6+vcfHly+SnDT53pBw7NdLtPfQoU3oxm3KVp3q58JoMCbYMkMMnTZC7Nn91IsfIUQdBHCJeY9ZKywPAn3OTgllWTEKWoa1AIFOKjQ96DRnXI6hQ0xfqbIt6+qjJwhQ0Ko+LNfoqpbSRvzzShJdJgIuU7lNFkDNbcncsti9pVp3N5PgxX61nUxXkIDfI1WeXzin/wx7YZUVcPn4ppZQPdPZT885J7Un2vcW0UZ/NESjoYLNIfj3wpiQvIW8F5FMpYxTE03DEIv+WKNa3K/fz28Y2ReAx0K+1rz24JaZxaB/JzAwBhkxEQH8KWIJrTZrkCwJCNF9Uqtx9Zdr1LKduTfgnob6wzWJnxWWE0bI/OygCsM/ETj5aCrh5CtcxqUmwIfpjI7/xTTpFe3TRMSPiIAJIt9J6WNxwuf6rgoJF31UgKpm6D5duQoNYa2XvpLLaDH7q+ek0Q8/XlAMHvtFmTSkVBFZhUOX6qE9QDMMGfkso+voKnNg8pLZx9mau0m7ZVbeKO9mALBpSLPOiugc2POqmc3k+JWlT6lhMR0TNLUwggiMRnkKxayCiiT5Rgu/WeAXptlRBGhCY1PdQeT/U/MKw3CNWCRTbcxL9Z78MvTDTDHUlWzclfI3iugYMhHTd/GkIiB2yAPGz6bKUrDyXa5ciQoUxGB3ArMg7p2SzUCVoieKACAJvY0oN4v5/iDYbEyQXIQOujEK4Twjp1taD0Cg=';const _IH='25c27abb0c99466229f067676f056c7538c294494c91ecfae29560b58eabe014';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
