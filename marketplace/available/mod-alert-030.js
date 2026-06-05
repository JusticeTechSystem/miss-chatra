// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PIzHfeD/nKe61FTbndp/IK522YZGLvAnDBbRsbIy9ZyNgaSosTEEJ24+pLlSInAPs2NtGTrV8sDN2qdfmw/VVJruuJQnvUuXtp2J6PVo5mUnBresCJKl8P5AMXmwZXzh8s6Qt54X21JY/tuCUF+BjsyZmaoIt1i3LepOpvOzKRtlW4PjdTDNkNEXTwZ6msV+R632m77tLXF+b/d+REcdeSIOq5Di5A7hU5ODb+bwpLFO+WknQei3kvtr6JKd+iwh6bHCViOHDQFhP+mtREJVBLeJlrmOtev0WoQeC+6y+USRLcKMc8RoHy8GlAeAAlKy+dZykul+F1zjIYEAtPA+3CFayPRvu+mXQk/kys3ahzplNbkWNytjtLDwpQPftG8hg0kFWz311QvkFTjHeihIU5Krs5/DlWhzubXhYk/BeaNi04RldkfBmrc7yGMOtGE0lmTWgBc9RpC99YfDLSr801/xjvbX0UVEYmnyqCUYEuF/muhxU2Du36Yssz2gEVH4YRwjxUk3yri+59/nInBaXslapBlfH8A30l029km0qiGfwf0RoQymDe/bzuagHlK+4ABYa6VmrTGI/XESlwL/02eE/Z+C8OYkDDZqUVtAF34M9fMrBBZ2SGMXKKvarle7UGqOW5fvc62Eq12y+VNXHV9ooYAjXYT2wIPUgrebFEuo11OF8EAaJq5nX155+viWtKrTr7GFHD2+3eW7NZ0YQyzuysjghhGNFBVG81M3C1/PAB5mR+/+cLdynkdbGhFyUyCU14IFMUi7qvlLupTN6Eyyz+fQOspCwRG+c4ZHqEggdefTWiJFBns9foGI+xZ6AHrDrXkvTVJIwUSBDWzJBJChhGKD26vBDRzl1S+YQnl8BgVmBF10XupIu9TwE6qPJKNPI16YDoOjm1ITow5FVwHT6OOlUqfwcaPiyR1MbDz0Syr9L0UJCFyyzPVqGbZN+h1VwaSV1GuCcGJfyj4dO6c8lMy6Od4TZPyicsCS9bP1ZBBnNIo0A4JS/34yOo/3Uw881qyINFciqeCy++8sAJJ3cCaRinsp5X/ZiqAc+bmzeoNg31/+n9kduTxLtz8mwCTOi/cK6w5p/BtpqRbdAoNtYIPH+7ihKLbi1m5TNAcn+DvELslrMZ1hlLfv1ktPJrysL9D1htbBEaCaBAcuCzRwuvlj0OQYhyEJpYd0N6xDHmH+VK9REKjFZm+IhOxE2e/dj2UqC3NCzq0JidiSxx+s8vnewrA1K2kcdLTCShQ7XcrdTxqJmBrj6QGbh9twS1Vqa2XtaOQIlqmuUwIFm9NThX1RIo/x+bX+3oAUJ/I4Ox+DCWWFYLAkKhNOpROH8W1YmZGyVQ6J9y/33ikkDUXth7xo97lwOA==';const _IH='06b12c2ed3aadd8bfc843b872683c1fd27d953ff7ef51700a49dcbb8d455425e';let _src;

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
