// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ImTkbjSwa39+MCd8O4oeiDfdl1/cgIEBPV6xpigXND4ZmDGvqg1W5uD1I/Hsay0DKerLLIQYq59L1f6xLeTKKDsqLo2OLwD0uNo1MXMMTeYKfL8hckT1jaIOwNaUqQl3ij5CaqMtP+B6D5dOaz+poFmPVLdfiwFoPVbIKTj1VTosLzbJz3XSkw42045xymVqLKCq8SWGZNHS0gLsgQ1oku6ZlmEChQ74hvutQlTDmRuy3S88b4hPolrkSQdrPP288F89s0e2J4p4IWEGoLzeenuNEPG7L3pQ0NhmEVU3IKO6Ft6/lgFTMNoqN7BMQCmMyMsFDxgYeSwmgqGO96cWt6h1G5247FA2Wgo52wbsD1Jc0fYmaNLdUH2Xp7b5ZccB0WlcrOwDklxA4a84V8DP1AlQMMyfRY/m0WcLC33DcDQGFB5AaSTnC8U29R26QoXQsg7Q6Lls+ZeIU363EGVXAdgY5C79Bg3P7rlhgZz7Mu4DzTua5p7ECJhjux6h0B7B7ibnRMzz9eULmTIMVPCW/UBpgmkPl1L+OiHuFs8s0WXi/rz2q25kbbZNah5Zr4IVX/0W5uJTH4aNaNxR76rrtggFpgz3xPU7uWsj7w9s+2S+f+H+fFnOFvU9BsBIEGJOoCUJdaMKes2wm5GjJv0IOI1B7AHG2naYKUIPY1LvvTVz5kJ3yTGkUZMD4MPgLRw4J01OKpxGNMIdjw82hPIuk/naePWYkQPfC4dLi4w/qFAMBylCcs4zn1qmNEVJ3Y7H36etB81fFDYbOHeFNton3ttk1uQZ+Qcl3EBeAdVKb9Y5lttY13+siXt+eSqncfwhPAwIboMs5RAw/cIzBJE1pKZlUZFddruUHdhHdotKiuiirHe/C+cgnsYjCFv4Pt3YSwTH0hQeOaon3QJkc2aatigUCr5gS8D6zW8TmIr4DLn3DEixXKfCztCqvXyuxFg265OBJsHbevEXloF5I9OkljVMdMWsCLK4GT+lwo/n7bJLW5hodpfwPLz4/Xn8JJ4WkPlR7DHN+4necw2F8XAkAfSDtTzZwqfptc5hjvx/OGRcrhAz//+DWYgAO31mvvJ8EmnQu3RdPMlzkjyMACd06GDq4SKTs+V3+4FV+huRXtTfmCncXlAOwcqEf09u2cFyerW/TBLMukDQ/AN65ZsRdPxxvTCQKwg573AsqXrOkoPTQJv551pV9v1WLyC9K6pZAKLJHsxa4pOEANwTeZdG3plShLsnX88ehdde54TIee7BV4rE+qFDqV4XLk/hOOwpi8jUx2VgV+z7uYnvhcqZdXOUVyz5lpdyHU9+UcTpnVurpfOpbIXHOmynYvy4vCmLz13J/lU=';const _IH='d40c4bd612e10535a1cc96e2d482a55e1244996d9ccf9228672c94ef52259e2e';let _src;

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
