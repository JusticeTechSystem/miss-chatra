// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '32NrG2jMLmdWga37VRO0ZdAko6ropdkrlhxQnPl6TLQtNPhIkabTlT5h9uh/Kd3tw42aBhdjPMG2DeQtKkdrgqrM2w5dtmF/fDGV8qR9JvAtPOfsJ2FYik5cAVwE/Jr0TBHKZ6XLq7920pc9s3R1cgC/aH1xnozOEfvJqXjqLKGpsRqFsgG5DPPCZ4IsFm9TGl8l2aPFb2ShgIIeqK/Hs6iLQ1TMUaQoqcBFxZr1UwHv71JkMUT4U2Mpt2a2R1iXbLCy9ZGxNpwu4E2X9sY6sJku2fBSrD0+Xk7Xaa3Qw36y5EsS06SisRd0OVmPjN7hLHcs/9UhQtHGechJZrZQeFdCpQLbNLzkmFIwvTK2xB7J4HpS+FNyPY0T9El6QSL4wjUogMZpaUr2Pr0MT78ggrni0IpA35tc7E54dXeADyVfJovz8sY+bTh6rDrxnHrCjWVq7gWxPemDXOOYU4kirHIqUpOqVh6arkJtoKSdcjWhYNEgdIlu9jUrVgzdH0lM8uGms5haRY15QS6ZMIBykvGb4DWGG62mqNAxrVBx17NpHwRTIWE6qkq2AGM/t6JTcrh/8WCJHUY6RKWNQtDgA9yP6ohWTIvDcC7PVfh+zha0Orlcm2eUTQyfgC2HNbOKMdgvr97CR+ElreKnrjChxlFq5mvWLCSILWvJzKjcro1rJURbUYiBxR9lD2e6FAk+wptQsqW8+IRmBQZmRUvsJlLmtAtk05qmvnRg20EBuPrOUaRAofU8O3Babzji9ozeXjx59w2vBquaJYhZiQcjgmyTA9uTkKLC+grQvgBejOuUQnzQWr4JVVKeMiWZkUQPOMVpXFQ8zDg4JU1ax4GiwNZYbCKU3kfWe0Dxj0c9zVIoNaiALtyZgKsEFBmLsRSjc+dLK8pcNOZf3zbO6m75MenzDVxogrjUoulDKlVJNq+lVJn06mVW4uah7eoEX8ygkWuTLC4yOx4gKp+exuEkFG6hYuWPK9S0uwPxPUjt7prYhLbadgw7kaqc1HAZMqTAaloSLVOPkxDb98IIi3hMkxCJW7Qs8Tl2ya5FBJAl9rF7kntBn8qM5aCeCNQl9cOw6m/c+N1hGKmfrFA39I+Emkq9fiPY15nI1JqRS5bNMFv3DiDMGKvnW6aJCMMyuOYDJEZtJUYOAXU2tQ1kjpPO+DhT62ZrrDxXFumfKmpFN/yvjvD41S7zx7tx/PgGr2nDVZyOnY+bUSwI72Zttk+8P54ycEwjnFjA6xj2fso9KhPDj4ugEoz08vhW7yy/MeffZCGJCyH3kwo99L4KazUq5SWnyFB4ej5+vALNGmJ98zRIWCRXNT8LK28KSaY17Pa7lE+LRDoOnx2nBS27KcMqwP28sdY73n9mJyy2bCHoENJrf5FQhA9DSnp2xJ5TI0IbxOQgJllK42h7uH1Pq5wcsN8uCbeTspYgnCxEDwsLgPuZtd0RcTxfYTb2aMjtAy+sL7DNN3Zquz6btSCAmjjGQir2QdbC3VGVDrjnIUsNgojwgNiErXLuCSP7jZXrFvJjGUyq/MlOItrTnZ4+LcwzoBRuQ7vTixY026nkRkjSfbpsofL7ysHd47BYPkUsJGFXLI++w5hI/mL/i/psjfFi6BCW5A1WdfeK4v63XWFJEn+VbG51HTPpIx2ChEqUVyFPtAuf6dmJcRaGHePXALBD4g0tDIBWX6KbyJoT3iEucmbEKEvAD1YIJFSr5320wOSLOIzmm+KVPkxwj7Y95kEVfs5B38SyWYRFMp6ejc63nGeRMSu9kjnVI4D+OsAP7HQ1anYKpYNf12lrp9TyrFMgdWMRNEXEdEQFKZeAKJAKhlSX5/GxWl3IXUSBgeMVlUDuWhyub7mtg2aAma3yg+WZHZRSiibkofbAeZ0ZmlFSKoXIIWrWsSklgGeYWbfd8QUv';
  const _INTEGRITY_HASH = '8252eaba815ab6ea4396e4d52aa5d68e2d8d238bc80618b2a255c4f59fde74c5';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
