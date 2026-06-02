// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nZ5d5BBrY14dCGl7VrhkdO25GbF+ZnlWw5mtILIbdv4UQhBy/VTHbY8o9nxZjJH5d08naPfmsDTZnk/lbxRm3++s6HnXzmSVqxGpAKNrTGoZ7Ruf2bjeInyHblQ6QBckK0RSDITp3xM/KXZLzcDtgjh3/u775MIkLkRepyO9sap5etVdHX4LAq5vYbvyDHds0q0ozLeRMrLm4eyqh1N2L8vOg+UYH5/pMLcXuGZ13Ba20Dm7VWCOLSwYntu45af6iqSmNftTmPLA2m7FZrSINHBKf0PJVZunRzJoPyI7EAOrQTRPNazY+exVpr7vq0knFYv7FadMUDGTcosMyR1Go6zDoKhLpDX/RqJsdofYixBiWS0ua7ZjBlbwfWvNGCK6nfAOMpaIvIjFzUh9Jrd3LB92KQ0v2rdvwd8Kex1b45euNWoMy3KmEBIQe+S55cdEHovgcYuOT7FXLxIz2dZcn7X6xubhS+S0LnQ2JuiO7eoCTUBGWJ7NEkUPmy1onFaymmoDdmrH5gCz1bMFNZNMdtTE0ppa82yX/dnpzvkvFQaD7jl5rUY41trSklOjG6oWf4LFNQ0bXFDltvn6/theuGKpn89KQX2+OGx2+xrVMzrefRx2bmj6rsyBYOgV5PFWGL1SegVy5wK79tkJIJBD/wjP0ritl5L/M+vOLLx3+eH9eKQVm/m06ewBCel3nJJAM6Dj6E7ck4BgV+Vqaa7s+ZuJ14GkzBzsWjq7h8z0muS9KbmOX6yEwWGHXUd12PupGyRyqUxLq7D34CbGNtK1b2tkWPtiR0Q0u2r/r6kJLLubANaR44ZBpeunBTqub8zOAAMyXOiRFTK3atxFi+fUyqQutZOT7meYTa2uQc07qMUsoQ8q+jvozutpfcrTopnwHiepLEuuN/e+SigmjyQT9jopJFoJY8wPtp3ArxReXFdGsI8tLh3If4YlHG/n+Ho1PyAdil3njlGsT5CZ7UOMwn8w5WpaqLejd3biIzTZLo7lCz61Rij/ujCbjlfNk/QmanZP0jNsA4KCqLnH1niz2bXxh/U8knBa4L6U2499+aPis6xJ3+Ti3fj4mJ8ENGXNqnHBHVIfCB1t1iCHAzHCTxUXEwZpAIZxDAth3VyOKUCmGT6E8dHyxkqceUVQPIHg8+1qvaBygSrqXqxXffC2JubBpxRhJ/Kw+WcrI762wTqKCh0ne+zQdLiF7C2dVohUMVGIWApeBYtvR+nsnyy+Wl4Qql81VOskXNU5ILO1Dmhd8Ssrt91e2AQpuW+yZTuDxf9lI4uaubusfu3fQs9Dw4pevVOCYtcgwlOFkBD4ZbId+ME3Yvj5lEpaxtUdVk+hgbA7VPNHE6S8WDPHtYoL0/QctGqTc12bJwDArTyS5RF7Y0Obd0paZ2TRsYazt43pF7SjH8zfoA8pM5eOKItc5Zl9O1BI9eaA5bFS';const _IH='3d2cf0ce1c19788024b6024401b662e3488ea36d57c03e25f6dffc9d0ea8948c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
