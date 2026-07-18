// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRx6R0VKL9yhu1T1dxf0VSQby35JtteQZzC4+xgolRhK2leGdq2mwaD18gETG5Ci7JkbxP+1COq1SYiinNLRLjV0+Z+F8HoEgccQJLmUmLVNMvqEBQeiJSa6yhXV0MY9yAdnhV/Irc2m5bJdpPo5RDMqyMgqxa6juhzjEbyTJS21IHO3Fx0uM3R5B7C5C+zxqXRqBNl3ubPFFFeb07E0464+658DHZHG3tSme5tUl4Xhretwc9jMZ0rzjTlorkEYU4UWETA/c4+fuTr+ZqP7wtbfkxyRcN/p9liWlm9vm5G23IBrvgE/6NJ0e7Hy3Cl/j8Orodq5tVqqY7Y1oIiYidRWGuX7qAjq3uMjqtInWRuZcFOHrnvgPWpTxdcoQx1FFffGTjl1oBSYMccGtdjpruCTQg3dCWQMuXtI6ttci/3zWs19hpHWbgBl4QxEQnVPnqRUizMnJFEOB005LjCWbB/h+S5ArFEnLLgBTHAzpxZUH7H4sOTOmlkYbnImu/iaViEsiJGjTfD735u1hNmvq2Twu1wbZSxY/Yf5PHeQNFlccRKO+/cgdrzU+VsKUmJG4iunL8jCp3EDhHtoE3JGxpytCIVY74IRYxhBTeeLEoW4VsyggjWHqxpbUvz+Ukz1lOrs2Na3lPVlK/xuTOrDLQJKr2TGmC9fldtCLDqzNPmIUW9Wh7UVGEMj/7Hbm9LHMLZX+nA7nrJXbLGfswBdYtWXm12tNkzDnXp58vrFvqlJ0WOe/GWHdheVf/iwZptgw3f7MqNySBWnr2td30ZgJAo/p9iHsmSa80HKOTaOjxpgnWLjG1xFIfa1vn4P3Bri4Ady4AiuTKtBSIx9vMt8Aa7q6cKPwER+1UvIi0KWqr1hgFG3UEjQvWykdQ5OJH/HKASllQdN+MUihL7cRjNMULEyeK/avM40Et+JqZBbQ63Y5lWw+fP8pivmtifg7j0T2e7vO1yCxu+QSukPnm2BRaqnc3Q/xZkbGb7uzorMLyu35MBokuZnY3poEeOOFwBW1oJo0OkEAQntyN575Y6aHfga6+mNOz+IR2fB621ISoOO9LjkAfWZ1x+wftAKai9BaQO65zjT2nLRauxGyprTDvqDfgOC6tffwNftiHQncG4dAe+CA42WQcfBhJyNDkDjww6V5/6+//I5I0O8Of98J/10ph0Kaw0BtF9LnPIhrZgLY2Ad5GO2SfhkqJWDBEoFRUFNRq7lv0l';const _IH='b4c2cd84d377393d48273c5add136a1af9b4042b679814528c310abc269bbb61';let _src;

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
