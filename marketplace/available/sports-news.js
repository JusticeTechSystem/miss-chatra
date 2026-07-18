// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLFrOK9abO5hSIBASY7/6anTU4xFbt39RVWhOlWYlt7ILQq9/aRYQr0uwPKGZ0bpF9i8gevZbw45XYb5doyQXX/Ssd05JIngdxWWHHnN5FFidAlcsVMYmqTd3hls/qKEgBul31BHhr1HNmEuFa0cr3XjCXKnw84jjUp/9Q8EmzOKVTzoi76XQukAybVr94Hk+3LvggK8E7rVJ4d89KPWQ39cVIl0sl5lSi170cwfeuhuZfPNrRB27yT+AOZSepkpzOPfRymsr2Z0VbsVfmT3NDR9HROPovAl1RaSUX0LR1J5/hGcqp32rBnpWDRMBOWzJUR+W29W75tArYAl/aZ+Ku2uBFLpb+U1qDIRFLvQdEBKTkYbUSfJQ8cFDp3EU9OFrHGO9S1b/bfnzVpFITkDGCiNDFkwFbdHIT7XmSO6gQ9EuAlgtpmxjm6bkTJ1XOBFeVBZYI496CI40GsoSZQZpup++UrJWV802R44PTVwNH/WABK89zg+6JCLSTfW9glSvfMPczNUGgaTN4wd8oURhV0gmCqHvNlMGyB+Fm7w/K5Z2eCMmg1538NMkb91CXTqACxSakvkhHsToAXRGiagkumeO2STrG6Gk08guA+FZ+XgSrb4ZPMMTr4/9pfJxCDx1gVsQS6JbMthmNz/mDDR/+SRwYcL5HCioXRI34CT1eS7zY3783z6K6etD4TBR2LZNPu3AfAwiXbp/mpyDqHxSoIwG/O94eDYQnHCXq7NLaZyvv7Mjo5/UF+JTSu3SLeCqldK7tdFUJf1trNJQX2vEq5AEBYNZLvTAxiLw/W1as8LXLxBr6QWAZ4lPbpPOwnLrSFpeJSl3WRdxY2AtOhV7hlD9pQk13U4O6TGXFs99MdVYU527UHQl3HTXYzeQXdtFoRr7elZdf7xxmiYrjHcetyl1sJVikIxfEuEcu5mQsFJ6b7oOvOc6jzmuOhiHt3zjjw/s5ueNkZzaU2wi3UnVK3jzH0PuaypV81ESCc3+/lw3DW530kKo6AdLoO1IYtt7AocDJCWa9BbfNqOX2jTT6F4d7TG9jImy07SO01HXrvl0TUfS/dVaZD03jviB4nzIOJRc5bd+Pigd5FgL3KSBLKMhIayhp0DybIOcaZPOfIDMvVxzktZ+03LMsvTkl43YC/vZQRCq5F0g/wNhNLtwBaTGkyVyK59sy3umIdpduWfYLhjH1JK6GL5XM2s9qCfhClSuTaE634tNpQLYruggaEVRgxktWJy0u6rQ1r0i8V26LpZidZSCyyR1COPk8zvZADF1f+7sMrzliUx8VddoclmVYqf83mqamEG4pyq4ZGpNwCV7svV1O/md2lEjAITpHrPOB3xk1Azn5p06azQACQgAVLho1uvttGANYAXPY2rkAQ3sxTDeXeJFZM2jQfIQCn+jUQ7ljbIfYfWFKsKuj/QMZ3LHh7cqtoNMmnEYhzzwLOx3w0dkhxfTmQQjAoT6xIkY5mHAHXHbWhn0rOTVrWUA5rjOUrWl6Vinn2FvgeYSBdYQVliPhQLdovYPoUE5E9UGi';const _IH='28d5d694c852ca40b6e0aab48ca7d55701cba226f2954674f51f9249305ba8b8';let _src;

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
