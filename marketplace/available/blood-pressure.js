// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFjFhk9GU6hN4VWmUEGK6AFbX5vAyq9IMPjVCvhPzFnF4r2qbbggMLwiFPKOenPSK23hnKH7mrF8KM0dfMGft7xhSsGYS65FM33OLLfsLjiv1O1mZASsSpuXG5vwOZgMZj8TSztmfuzfrsuah4rGthJwU8+daGj35Gs8hL9KubHUrrhoeLVOIx6w9ZcE+cHi/M3KazKAn3dgQR01cGFcPYHPChIdN9HfvCz4ddiyNfyWnqsyndqEhWcR1SlMMotaapjCJw4PlTt3XjQvCSSW8oxiY+7HnzHV5/dFwKQLO4uNURJEJLTLfWvuOt3y3FqgVgCtxULl/8XhIB6g7Zcz5763fVcXZLnYb47s7IxBh/2CGAnc+xQxTNeYVXKwmd8LTR7N258Ng9/yD+iJ3ig99dl71Ui7dNkgEA9ZpiAG87QaCFy2jbuBNOfv1zwtmI3cz5VOiKacaNQNQsnamUzL7lMXhOyD0socu3YeBPGcGp4+Br2NHXm5jdr/Q8yIhgAwrEctOTZuNu4hACSTeija5Gxo/8IeQu7V2d3DocDOOus48BDOrndntPoIGAewqUrQJC7wTKat4b15FWHy9ph3P1mVsmXkgDVT+aZeRroT9UOZBZr/VSjtcLqf5vTPKKt3roEkvrrvb9hGtG8VlVigRbNy2idTQ2re7sdcOKJBa6raMnFi4ODkf/ajmYiCsp03jeHcqzEbEcHlwmw1Z79FEsMe4PG63G8PFfbHpkoNHGy5Fzg4+OjToQBQErxEsYcxdVdhpeBiBsIoXjiIlEg/OdLK0kJA2993TfyCHat689fP6mok8E2zg899TmAGqAVY4swxJKJILnx4d+iwC2hzgOMklkeFHA9jDP6q1xwGQJ3Nq9zwk1QXD7SIgKdpAFOIJd8+IJJFWLzqY8fH1bX4Xj2jb4734fckSB1wvkqDpTCmglgAth/uOflHbhcPGx7hkIAufAFCpjthTfHQzHwks9dkTmT5ixiko+PsJNgf3rQTJPDFgQfvQVCKC4p45VhA+GITi1Wj7lD7wRY+uNjl0enQb7vHA0z2pgIxIORLNqNOvyiA5dKe/d4RMgZPh4IPHw9bAqPtXE2ljB42plDJ0zJCax8AxtAjrg8UnlYCZ9E5ks/vwlfS0X7dFKtAJCNfD/UuG0Oevh+HXluKxiOffawHHq189SvN0fUVy1lFOKouWRr0cENMZJXmHSV5aZ9I4LECl1Qd2V0xKabmJZZBX0qAuRIM1AEGHiU149JTUESOnFhb9K6uSpTUsno+5+ipTRdNISd5jSyacG/5qOaEWzKan4d4C63fRN8m7ZcI+XFtEl23guGdkhxZ1P0WHYiNUBnCllp7ogaxyQ2JxbA9d5ifOAASSUeWkpJrSem1WgCQ+lftcJrgfdzxiZXsw2QL0R/y06xl1OqasOXXbISrvApkMH9u7aI53KjmIn4O5/2Wghs4W7cb3fR2+xiz3+yONckcmbUVcQczOEzazFAB54F+4NAkuodk72sxz0C+kgxWpMMETK8OuWvTAg+EvOfPnmspb6Vsm/Z9lxhdnonOyVtVK/9HvsqhMjWzf2LU3mfxMbC/ZKeScrndhysIo7';const _IH='0ec0ff96d2c9f853b641507495a0fce1b119f0f93b13279d742486138cb4e06a';let _src;

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
