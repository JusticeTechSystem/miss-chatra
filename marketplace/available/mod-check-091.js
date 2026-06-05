// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+fXjxm4MNM2gs3qGQZ1j6uRrXanzHTy4SdMvHMsSR9LRZBs52Tov+r/eG3r/fv4m/bcW+O8yAYj7Ksy/wL2FT7OkRvlMwbNFZdASGFrW/I/LDiMTo+jbcJekkSEMe+TGzCCowMQDPp8BL/153BPD59f0v7mebNGqTSWGuL2504BX3tWDGy6HviqkTcCsLODLn5RFC4hDmNNBxsnfsw+OJDAvjty9YSB8irBgN9MO5ojrJQKcQRyb2hPHrdnNh1vKjEqkOyNVO2un0umEtcyz51qmW/RwB1Oe4VxH+7Sck6b1SRAzzWVv/6J+2bnoJF/Xxw+SLg9wAwJ3Ob5bjPH1c6Oq+p3rYKLqKNzu7aF87SNiIHc5sGchUup6ah/thvoC8pzKeH8oxSyGLBt00QjFhCQBp59AEuTuuh7gCuz34OWsew7+jWV6vAPeMIlU+ZtSiLZmAugPW2Uwj87FhnuMbab+ryQyEixrG3MTGqfGFEYOR34rDGTHM/5bsokQh0hoZ2wPy+SGgx7dLd6QH9VoD5Fj8n3NlLnME9w3ZWX6ntXRjZmFSDWLoqbWodlmhdbYytHpTAGvPV+pwHYXSuPSxNrUqMwbutMe7pjBfmdcrkBKkTAACMT62yRIJuiW4qltqM0RpCeLiDyuHFxM9hKFE4xCjxYF2Phkvyr/isBC/mHHIkJ5QxhlOijjJutINohhnoWzc6sjy1dxxCdKNXKr82A3zxbkud8/nRYZ64kMf1F5TxXdm0CphOX4VXWlnL7S7tGsB3K9og6zxh9xm1W7qtS3lsKzqW8aiprW5IMGKDeDMLj3mkvS1SHt+1NrPFTKXbk2unSuWyIgPxFKT8Zyxz02IrgNEdfAlkGsWGwWnTDo1g4F5tYimX5/VfrhLeWSB1FGA9Sj4qJXbZGkZVDsCzV/7guJpZXxCAq7423qlq8mUgFxzDdLd9xAwUhswjQchsMgO+sOVb6jWbA6irywP40SxQeZqI383vCPzy/XStyOGYhDvvXDVxZMnp6PXEVBYfvSU0JUjsyrycwfv5ojjkfLyaEvnOIKU0ouc6kabmpI70WlOPAafBEuLv5O6clks448rIUpr3jI8bpLpN41h6gyF56mtHGvQUvyEo1gCU03hp/nu+AfCi6bsq6kdnhW+zc848f7i4L4iKtV8sNzleoAbAU2WfQSW3q7N3rxQG98fhuTyi4m/obKoPXsx2JZV7tDfkVg863gpNgAlE5t16U5i0rmskR1bjsUSsGI/3yx5YOkTvNyvVLkhCm4CesOSA4dR5tPL7X0HzeD97k6SX/KjVOsgsMPatwPyVND5EFDq9mvnJ8g1ixiHZdBPSWNEDN8yw5mJAeWLV/7gZ+8/mgP0lMmCj3hkg==';const _IH='c2f1cf814cb82ccfc4906f346a1cc5969824fab87f781d644dae725f030a5592';let _src;

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
