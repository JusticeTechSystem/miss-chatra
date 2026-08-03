// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSCFgp45voAiyy14IgaSMrx0fkXdAhfX8Eq3b07JuCJuuMMcfG7UMd1fWveWEh7bBYf9ByUytS7kdZjsytjUskGHuxaane7Ufsyn/asUqqNpVGkfUe6YWKs12NPWbVAeJ3CkZrW5LLCHpgQWp0yhv7vDmKzdkU4P4b+qKC4nFw+R7dwZEAaGN7RXzt2zorqUUeKaiYV1V39rHYgeZhXYFF4Z4RkIDgStJV9vN5Qv01HTZjlM++70Hp71GxrYHqQKfjTrXF/mk3pZ+ShFVGkeQFTj42tXteFc3iRmtewhIrXfmivMHugX2m/LhsdubGbyrtOBf9Caj7wBx2D5R+ijRPROCAowuXXYvt32tvSooWkMJhaUAgpFM0CpoN+ll9+JAakut7yahaZ/zQpvylgUpqzTdtCHGf2ZoW0vnb4acgMCttVLpXjTxjUEYTeO9+JI2QqKCYBkGqeO28UDOBsJmoXRmSIXgs8VPE4fyUvvrjz5EJhtyDIuV2BD02YCJtlRdYRCuyEdl3pR/K4jvPHPmRTHJT5AjY7EHHdcqqQY0NgpPe6BwMtRkBpsbiFyWiKGlPoA5wri0yfpCEILwuGsO9TABnzqhCougnYE7jIe8SFuAcuubknmkg2bueuYav23l2Q4XDlsPeM05ZmfkmZZUOMGiO7jJAS8ebLQ7AyVu+87xITel2yNogrMm75tW6mplh5T45wU7CIO2UV7yqFPIT/VtlhdU3ZwCK+8p1HbuunwlIeTAbNZWJH+hLXLsYc3tnYnNNLBNEqsULqCDctEVZFfaX85R8oKyx78K7XPRV2FtaeOuVtfdTT6dRyLNvP61qwL4X9OYWMfzkwp3dM0xydKQcuJp86Dxo7PlPn+ED9LFThcpPOUSiQurQBbf7fcqS/XmWNvxbXj5eo4bBv8wvmZf5v0GQatM7fY3Q0ZBwqR27RfqPwbssJ6/XnhLAYB0FLeWNhBxzKGaf5QHP6BuGC585Ic/P06ZkJ0Arr0vjR0Oz0xFcKZMa26HHJPDjgvVwz7JszEOSa1A+BwpwUadcROMYyoAkw6EBOf+4umlppbR91y1yXkL4rJMpBfeqwxM3wsiJ+4doTqh1SP49RJUuuN/lRHEpyLGEoxxHh7LOBE6VdCZ3bOObSErNYLmhx3+Ts0MqQbyxkNqQGAuHY65k51GrhSIRvejItYtMMyHnwcXVlro0YlpYe8QDGg8vwx+B5Vjsb2P0IsvtkkvvmcpxwKAwLRGdAVtuJKtWT9U4AxGykoLJSxw6l+EukotXLbhMagGxMVcKV29JT06jtsDJHNWUtjoF3LxayUKHofITYKX7eOd2eqI0PZbJyIVbEi4mReoMlCE8YzBLUTMEav3BiTcbS0VKawOIhwHGnmWKsQ==';const _IH='516e0721dcb7438b1558b861d078d8841d71e2b6e1a0f6e74642a6cdafbeeeb7';let _src;

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
